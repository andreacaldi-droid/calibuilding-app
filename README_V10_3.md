# CALI POWER V10.3 — Recovery & History

Build: 2026-10-06  
Engine label: A10.3  
Base: CALIBUILDING V10.2 Runtime Hotfix

## Cosa corregge

- Recupera automaticamente le sedute `interrupted=true` senza alcun lavoro reale, spostandole nell'audit.
- Permette di annullare una seduta salvata per errore e rifare il check senza cancellare lo storico precedente.
- Ricostruisce il progression ledger dalla cronologia reale, invece di fidarsi di un ledger stantio.
- Normalizza i backup CP2 che usano `regions` verso i distretti `muscles` letti dal motore, conservando comunque `regions`.
- Mostra "ULTIMA VOLTA" sotto ogni esercizio proposto e nel runner: carico/setup, reps, RIR, dolore, tecnica e note.
- Rende ogni seduta dello storico realmente apribile con dettaglio set-per-set.
- Aggiunge un timer integrato per hold/isometrie; default 45 s se il nome identifica una tenuta e non è presente una durata esplicita.
- Aggiunge countdown vocale italiano 10 → 0 per recuperi e tenute, con toggle ON/OFF nel runner.
- Completa il pacchetto PWA con `manifest.webmanifest` e `sw.js`.
- Ritocca l'interfaccia verso verde scuro con inserti rossi per azioni di annullamento/sicurezza.
- Non modifica il MASTER e non cambia le sue priorità.

## Installazione

1. Chiudi qualunque seduta in corso.
2. Nell'app attuale fai **BACKUP JSON** e conserva il file fuori dal repository.
3. Nel repository GitHub dell'app sostituisci/carica SOLO questi cinque file:
   - `index.html`
   - `manifest.webmanifest`
   - `sw.js`
   - `icon-192.png`
   - `icon-512.png`
4. Commit delle modifiche e attendi il deploy di GitHub Pages.
5. Apri l'app dal browser. Se resta una versione vecchia, ricarica la pagina; il nuovo service worker è network-first sulle navigazioni.
6. Controlla in PROFILO che compaia **CALI POWER V10.3 / A10.3**.
7. Controlla STORICO: le sedute devono essere espandibili e il ledger deve mostrare la data dell'ultima esposizione reale.
8. Se lo storico locale non compare, usa l'import JSON dell'app e importa il tuo backup. Non caricare mai il backup JSON nel repository pubblico.

## Recupero del 6 ottobre

La V10.3 riconosce automaticamente una sessione con:
- `interrupted=true`
- durata <= 10 minuti
- zero set/lavoro reale

e la sposta nell'audit, escludendola dall'adattività.

È fornito separatamente anche un JSON di recupero già ripulito dal falso workout del 6 ottobre. È un file personale: **non va caricato su GitHub**.

## Verifica rapida

Dopo l'installazione:
- OGGI deve permettere una nuova decisione se la seduta falsa del 6 ottobre è stata archiviata.
- STORICO deve aprire ogni seduta e mostrare i set.
- Una nuova prescrizione deve mostrare "ULTIMA VOLTA".
- Un esercizio isometrico deve mostrare il timer.
- Negli ultimi 10 secondi di un timer, con VOCE ON, devono essere pronunciati 10, 9, 8 ... 0.
