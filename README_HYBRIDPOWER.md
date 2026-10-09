# HYBRIDPOWER HP1.0 · Engine H11

Release: 2026-10-09

## Cosa cambia

HYBRIDPOWER mantiene il MASTER personale e lo storico dell'app precedente, ma amplia il motore di selezione in modo **deterministico e non casuale**.

La decisione usa, nell'ordine operativo:

1. check di oggi (energia, fatica, sonno, dolore/flag, tempo, luogo);
2. storico reale e ultime esposizioni comparabili;
3. domanda muscolare e priorità del MASTER;
4. attrezzatura realmente disponibile a casa o in trasferta;
5. costo articolare/fatica e opportunità delle prossime 72 ore;
6. confronto tra famiglie di stimolo e singoli esercizi;
7. progressione o consolidamento.

Sono disponibili, quando hanno valore maggiore delle alternative: bilanciere, EZ-bar, manubri, corpo libero, TRX, elastici, isometrie/controllo e conditioning ibrido.

La parte Chechi/iso-dynamic entra come micro-dose quando è sottoesposta e compatibile col budget di tempo/fatica. L'ispirazione I90 è usata solo come concetto forza+endurance: non è una copia del protocollo.

## Migrazione senza perdere lo storico

**Usa lo stesso repository / stesso indirizzo GitHub Pages dell'app attuale.**

HYBRIDPOWER conserva volutamente la stessa chiave locale `CALIBUILDING_V01_STATE`, quindi nello stesso browser/origine riapre lo stato già presente.

### Installazione oggi

1. Nella tua app attuale: **PROFILO → BACKUP JSON**. Conserva il file fuori da GitHub.
2. Estrai lo ZIP HYBRIDPOWER.
3. Nel repository GitHub attuale sostituisci i file con:
   - `index.html`
   - `manifest.webmanifest`
   - `sw.js`
   - `icon-192.png`
   - `icon-512.png`
4. Commit.
5. Attendi il deploy di GitHub Pages.
6. Chiudi tutte le finestre dell'app e riaprila.
7. Verifica che in alto compaia **HYBRIDPOWER · HP1.0 · H11**.
8. Vai in **PROFILO**: abilita il setup sicuro per Barbell Bench Press **solo** se hai realmente rack/spotter/racking sicuro.
9. Vai su **OGGI → CHECK → DECIDI** e allenati.

### Importante

- **NON cancellare dati/cache/sito prima dell'aggiornamento.**
- **NON importare il vecchio recovery del 6 ottobre** se hai già allenamenti successivi: rischieresti di sovrascriverli.
- Se cambi URL/repository/dominio, localStorage non migra automaticamente: in quel caso importa il backup JSON più recente nell'app nuova.
- Il backup JSON personale non va pubblicato nel repository.

## Sicurezza Barbell Bench

Il motore vede bilanciere e panca, ma non auto-prescrive la Barbell Bench Press finché non confermi un sistema di racking/spotting realmente sicuro. Questo non blocca DB Bench, OHP con bilanciere, row, squat o RDL quando compatibili con il tuo setup.

## Trasparenza

In COACH compare un audit H11 con candidati realmente confrontati, esposizione precedente, famiglia di stimolo e punteggio euristico. Il punteggio serve a ordinare opzioni: non è una misura biologica.

## Rollback

Se qualcosa non va:
1. non cancellare i dati del sito;
2. rimetti i file V10.3.1 nel repository;
3. riapri l'app;
4. usa il backup JSON solo se lo storico locale non è presente.
