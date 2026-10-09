const headers = {
  "content-type": "application/json; charset=utf-8",
  "cache-control": "no-store, max-age=0"
};

const reply = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers });

function syncId(request) {
  const id = request.headers.get("X-Cali-Sync-Id") || "";
  return /^[a-f0-9]{64}$/i.test(id) ? id.toLowerCase() : null;
}

async function ensureSchema(db) {
  await db.prepare(`
    CREATE TABLE IF NOT EXISTS hybridpower_state (
      sync_id TEXT PRIMARY KEY,
      encrypted TEXT NOT NULL,
      client_updated_at INTEGER NOT NULL,
      revision INTEGER NOT NULL DEFAULT 1,
      app_version TEXT,
      updated_at INTEGER NOT NULL
    )
  `).run();
}

async function readRecord(db, id) {
  const row = await db.prepare(`
    SELECT sync_id, encrypted, client_updated_at, revision, app_version, updated_at
    FROM hybridpower_state WHERE sync_id = ?
  `).bind(id).first();

  if (!row) return null;
  return {
    encrypted: JSON.parse(row.encrypted),
    clientUpdatedAt: Number(row.client_updated_at || 0),
    revision: Number(row.revision || 0),
    appVersion: row.app_version || "",
    updatedAt: Number(row.updated_at || 0)
  };
}

export async function onRequestGet({ request, env }) {
  if (!env.DB) return reply({ error: "D1_BINDING_MISSING" }, 500);
  const id = syncId(request);
  if (!id) return reply({ error: "INVALID_SYNC_ID" }, 400);

  await ensureSchema(env.DB);
  const record = await readRecord(env.DB, id);
  if (!record) return reply({ error: "NOT_FOUND" }, 404);
  return reply({ record });
}

export async function onRequestPut({ request, env }) {
  if (!env.DB) return reply({ error: "D1_BINDING_MISSING" }, 500);
  const id = syncId(request);
  if (!id) return reply({ error: "INVALID_SYNC_ID" }, 400);

  let body;
  try { body = await request.json(); }
  catch { return reply({ error: "INVALID_JSON" }, 400); }

  if (!body?.encrypted?.iv || !body?.encrypted?.data)
    return reply({ error: "INVALID_ENCRYPTED_PAYLOAD" }, 400);

  await ensureSchema(env.DB);

  const now = Date.now();
  const clientUpdatedAt = Number(body.clientUpdatedAt || now);
  const appVersion = String(body.appVersion || "");
  const encrypted = JSON.stringify(body.encrypted);
  const baseRevision = body.baseRevision;

  if (baseRevision === null || baseRevision === undefined) {
    await env.DB.prepare(`
      INSERT INTO hybridpower_state
        (sync_id, encrypted, client_updated_at, revision, app_version, updated_at)
      VALUES (?, ?, ?, 1, ?, ?)
      ON CONFLICT(sync_id) DO UPDATE SET
        encrypted = excluded.encrypted,
        client_updated_at = excluded.client_updated_at,
        revision = hybridpower_state.revision + 1,
        app_version = excluded.app_version,
        updated_at = excluded.updated_at
    `).bind(id, encrypted, clientUpdatedAt, appVersion, now).run();
  } else {
    const result = await env.DB.prepare(`
      UPDATE hybridpower_state
      SET encrypted = ?,
          client_updated_at = ?,
          revision = revision + 1,
          app_version = ?,
          updated_at = ?
      WHERE sync_id = ? AND revision = ?
    `).bind(encrypted, clientUpdatedAt, appVersion, now, id, Number(baseRevision)).run();

    if (!result?.meta?.changes) {
      const record = await readRecord(env.DB, id);
      if (record) return reply({ error: "REVISION_CONFLICT", record }, 409);
      return reply({ error: "NOT_FOUND" }, 404);
    }
  }

  const record = await readRecord(env.DB, id);
  return reply({ revision: record.revision, updatedAt: record.updatedAt });
}

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: { "cache-control": "no-store" } });
}
