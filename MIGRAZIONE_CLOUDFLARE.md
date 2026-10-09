# HYBRIDPOWER HP1.1 — MIGRAZIONE DEFINITIVA A CLOUDFLARE

## Principio fondamentale
NON si riparte da zero.

Il file JSON esportato dalla tua app attuale è la sorgente di verità per la migrazione.
Importandolo una sola volta su HYBRIDPOWER al nuovo URL Cloudflare, mantieni:
- storico sedute;
- carichi, reps, RIR e note;
- audit;
- MASTER e priorità;
- vincoli;
- profilo;
- stato adattivo ricostruibile dallo storico.

NON usare vecchi recovery JSON se hai già allenamenti successivi.

## File cloud
La build usa:
- Cloudflare Pages per l'app;
- Pages Function `/api/state-sync`;
- Cloudflare D1 per conservare il ciphertext sincronizzato;
- cifratura AES-GCM nel browser: il backend riceve lo stato cifrato, non il JSON leggibile.

## Migrazione
1. Nell'app ATTUALE apri PROFILO.
2. Esporta STATO JSON e conserva il file.
3. Verifica che nello STORICO l'ultima seduta reale sia presente.
4. Carica i file di questo pacchetto nel repository GitHub.
5. Crea/importa il progetto in Cloudflare Pages dal repository.
6. Build command: `exit 0`.
7. Build output directory: `.`.
8. Crea una D1 database chiamata `hybridpower-sync`.
9. Nel progetto Pages: Settings > Bindings > Add > D1 database.
10. Variable name: `DB`.
11. Seleziona `hybridpower-sync`.
12. Redeploy.
13. Apri il nuovo URL `*.pages.dev`.
14. PROFILO > Importa stato JSON > scegli IL BACKUP PIÙ RECENTE fatto al punto 2.
15. Controlla STORICO prima di fare qualunque allenamento.
16. PROFILO > ATTIVA CLOUD SYNC SU QUESTO DISPOSITIVO.
17. Copia e conserva il Codice Sync.
18. Sul secondo dispositivo apri lo stesso URL Cloudflare.
19. PROFILO > incolla Codice Sync > COLLEGA E SCARICA STATO CLOUD.
20. Da quel momento usa SOLO il nuovo URL Cloudflare per registrare gli allenamenti.

## Regola anti-fork
Dopo la migrazione NON continuare a registrare nuove sedute sia sul vecchio URL GitHub sia sul nuovo URL Cloudflare.
Il vecchio URL resta solo come fallback temporaneo.

## Test prima della prima seduta
- HYBRIDPOWER HP1.1 / H11 visibile.
- Storico completo presente.
- Ultima seduta reale corretta.
- MASTER corretto.
- Cloud Sync = SYNC ATTIVO sul dispositivo principale.
- Secondo dispositivo mostra lo stesso storico dopo collegamento.
