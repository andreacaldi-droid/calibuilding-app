CALIBUILDING V10.2 — RUNTIME STABILITY HOTFIX
Build 2026-09-28 · Engine A10.2

CORREZIONE PRINCIPALE
Il click AGGIORNA + DECIDI ora è protetto da una transazione runtime:
- salva prima gli input;
- mostra CALCOLO IN CORSO;
- genera la decisione;
- se il layer Objective-Lock incontra un dato incompatibile usa fallback A9, poi A6;
- un errore non lascia più una schermata apparentemente bloccata;
- compare un diagnostico leggibile e un pulsante BACKUP JSON.

PREVISIONE
La previsione 48h non viene più calcolata nello stesso rendering della decisione.
Viene caricata dopo, in modo separato. Quindi un forecast lento/rotto non può impedire
di vedere la seduta di oggi.

COMPATIBILITÀ
Corretto anche il passaggio dati a101 -> a10 usato da una parte della UI V10.

AGGIORNAMENTO GITHUB PAGES
1. NON resettare l'app e NON cancellare lo storico.
2. Nel repository GitHub Pages sostituisci index.html con questo V10.2.
3. Se usi anche la PWA completa, sostituisci manifest.webmanifest e sw.js.
4. Commit main.
5. Attendi Pages deploy verde.
6. Apri l'URL GitHub Pages in Edge e fai Ctrl+F5.
7. Deve comparire V10.2 · A10.2.
8. Solo dopo riapri l'icona desktop.
