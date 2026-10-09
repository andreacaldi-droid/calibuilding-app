# HYBRIDPOWER HP1.0 / H11 — Red Team

Data: 2026-10-09

## Verdetto

**Promossa come release operativa per l'obiettivo personale, con limiti espliciti.**

La forza della release non è “più esercizi”, ma la separazione tra:
- obiettivo stabile;
- dati reali dello storico;
- readiness/contesto di oggi;
- famiglie di stimolo;
- esercizio concreto;
- progressione comparabile.

Non considero scientificamente validati i coefficienti H11: sono euristiche software. L'evidence base riguarda i principi sottostanti, non questo algoritmo specifico.

---

## 1. Red team scientifico / training

### 1.1 Ipertrofia vs ibrido: rischio di interferenza
**Attacco:** se HybridPower aggiungesse corsa/metcon perché “ibrido è meglio”, potrebbe sottrarre recupero a ipertrofia e forza.

**Evidenza:** il concurrent training può migliorare endurance mantenendo buoni adattamenti di forza/ipertrofia, ma volume, frequenza, modalità e intensità dell'endurance influenzano l'interferenza. L'umbrella review più recente trova in media esiti di forza/potenza/ipertrofia comparabili a RT quando il concurrent training è ben gestito; letteratura precedente mostra che running/frequenza/durata elevate possono aumentare il rischio di interferenza.

**Decisione H11:** physique/strength rimangono la priorità. Il blocco ibrido entra solo se recupero, domanda muscolare e prossime finestre lo consentono. Quando è nella stessa seduta, gli anchor di forza precedono il conditioning e il conditioning non è massimale.

Fonti:
- Wilson JM et al. J Strength Cond Res. 2012. PMID 22002517. https://pubmed.ncbi.nlm.nih.gov/22002517/
- *Maximizing Adaptations in Concurrent Training: An Umbrella Review of Meta-analyses*. Sports Med. 2026. PMID 41762427. https://pubmed.ncbi.nlm.nih.gov/41762427/

### 1.2 Variazione esercizi: rischio “muscle confusion”
**Attacco:** aggiungere manubri, bilanciere, EZ, TRX e angoli potrebbe diventare rotazione casuale e impedire progressione.

**Evidenza:** una certa variazione sistematica può favorire adattamenti regionali/forza; variazione eccessiva o casuale può compromettere gli adattamenti.

**Decisione H11:** nessun sorteggio. Le famiglie sottoesposte ricevono un bonus modesto, gli esercizi con storico comparabile ricevono continuità, e due varianti ridondanti della stessa famiglia nella stessa seduta vengono penalizzate.

Fonte:
- Kassiano W et al. J Strength Cond Res. 2022. PMID 35438660. https://pubmed.ncbi.nlm.nih.gov/35438660/

### 1.3 Isometrie / “Chechi”: rischio di trasformarle in decorazione
**Attacco:** handstand, L-sit, hollow e support hold potrebbero diventare finisher estetici senza utilità.

**Evidenza:** il training isometrico migliora forza, ma mostra specificità rispetto ad angoli/compiti; non sostituisce automaticamente il lavoro dinamico.

**Decisione H11:** le isometrie sono micro-dosi di controllo/forza specifica solo quando la componente performer è sottoesposta e il costo di fatica è accettabile. Non sono obbligatorie ogni seduta.

Fonti:
- Lanza MB et al. Eur J Appl Physiol. 2019. PMID 31522276. https://pubmed.ncbi.nlm.nih.gov/31522276/
- *Effects of isometric vs. dynamic resistance training...* 2025. PMID 40817007. https://pubmed.ncbi.nlm.nih.gov/40817007/

### 1.4 RIR/autoregolazione: rischio di falsa precisione
**Attacco:** RIR è soggettivo e può produrre decisioni troppo sicure.

**Evidenza:** RIR è utile e può essere affidabile per prescrivere/regolare carichi, ma l'accuratezza cambia con carico, esperienza ed esercizio.

**Decisione H11:** RIR non decide da solo. H11 richiede storia comparabile, carico/reps, tecnica/dolore e trend; i coefficienti non sono presentati come soglie fisiologiche.

Fonti:
- Lovegrove S et al. J Strength Cond Res. 2022. PMID 36135029. https://pubmed.ncbi.nlm.nih.gov/36135029/
- Hughes LJ et al. PMID 33337690. https://pubmed.ncbi.nlm.nih.gov/33337690/

### 1.5 Volume: rischio “più set = meglio”
**Attacco:** un algoritmo di domanda muscolare può continuare ad aggiungere volume.

**Evidenza:** il volume ha una relazione dose-risposta con ipertrofia, ma con rendimenti decrescenti e grande variabilità individuale.

**Decisione H11:** usa crediti settimanali, costo di fatica e stop di valore marginale. I “crediti” sono esplicitamente euristiche software, non equivalenti biologici.

Fonti:
- Schoenfeld BJ et al. J Sports Sci. 2017. PMID 27433992. https://pubmed.ncbi.nlm.nih.gov/27433992/
- Pelland JC et al. Sports Med. 2026. PMID 41343037. https://pubmed.ncbi.nlm.nih.gov/41343037/

### 1.6 Angoli spalle/bicipiti/tricipiti
**Attacco:** promettere “targeting” millimetrico di capi muscolari sarebbe più marketing che scienza.

**Decisione H11:** usa famiglie biomeccaniche (vertical press, lateral, rear-delt; curl neutro vs supinato; pressdown vs overhead) per evitare ridondanza e coprire funzioni/posizioni diverse. Non attribuisce percentuali di crescita a un singolo capo né ruota gli angoli a caso.

### 1.7 I90 / Marco Tomasin
**Attacco:** copiare un protocollo nominativo o trattarlo come “scientificamente provato”.

**Decisione H11:** non copia I90. Usa solo il concetto generale forza + endurance/conditioning, subordinato al MASTER individuale. La validità scientifica è attribuita ai principi di concurrent training, non al nome commerciale.

---

## 2. Red team informatico / adattività

### 2.1 Fonte di verità
**Rischio:** ledger stantio rispetto allo storico.

**Correzione:** lo storico/setlog resta la fonte primaria. Il ledger è derivato e viene ricostruito quando cambia l'integrità dei set.

### 2.2 Integrità dati
**Rischio precedente:** una firma che contava solo sessioni/esercizi poteva non accorgersi di modifiche a carico/reps/RIR.

**Correzione H11:** la firma include dettagli dei set (load, reps, RIR, dolore, tecnica), così un cambiamento reale forza il rebuild.

### 2.3 Sedute salvate per errore
**Rischio:** una seduta zero-work poteva alterare recency/forecast.

**Correzione:** sessioni interrotte e senza lavoro reale vengono archiviate nell'audit e tolte dalla catena adattiva. Le funzioni H11 di recency/famiglia ignorano sessioni senza lavoro reale.

### 2.4 Randomness
**Rischio:** “esplorazione” o varietà casuale.

**Correzione:** `explorationEnabled=false`, nessun `Math.random` nella build H11, scoring deterministico. A parità di stato e input, il motore non introduce varietà per sorteggio.

### 2.5 Attrezzatura
**Rischio:** prescrivere esercizi impossibili o insicuri.

**Correzione:** pool filtrato per casa/trasferta e requisiti. Barbell Bench richiede conferma separata di rack/spotter/racking sicuro. I manubri sono riconosciuti anche nei vecchi schemi dati (`adjustable_dumbbells_each_kg`, `db_each_kg`, `dumbbells_count`).

### 2.6 Compatibilità storico
**Rischio:** CP2 usa `regions`, parti legacy usano `muscles`.

**Correzione:** normalizzazione `regions → muscles` senza distruggere i dati originali.

### 2.7 Persistenza durante l'upgrade
**Rischio:** cambio nome = perdita localStorage.

**Correzione:** la release mantiene volontariamente la chiave `CALIBUILDING_V01_STATE`. Nello stesso origin GitHub Pages conserva il database locale.

### 2.8 Cache/PWA
**Rischio:** vecchio service worker continua a servire V10.3.1.

**Correzione:** cache versionata, `skipWaiting()`, `clients.claim()`, navigation network-first.

### 2.9 Trasparenza decisionale
**Rischio:** algoritmo “black box”.

**Correzione:** COACH mostra candidati, famiglia, set recenti, ultima esposizione e score euristico. La decisione resta criticabile e verificabile.

### 2.10 Single point of failure
**Limite aperto:** lo stato operativo è principalmente nel browser/localStorage. Un reset dei dati del sito può cancellarlo.

**Mitigazione:** backup JSON regolari. La release non pubblica backup personali dentro lo ZIP.

---

## 3. Test tecnici eseguiti sulla release

- JavaScript di ogni `<script>`: controllo sintattico con `node --check`.
- `sw.js`: controllo sintattico con `node --check`.
- `manifest.webmanifest`: parsing JSON.
- chiave storage legacy presente;
- H11/HP1.0 presenti;
- nessun `Math.random`;
- esplorazione casuale disabilitata;
- safety gate Barbell Bench presente;
- DB Bench, Barbell OHP, EZ Curl, overhead triceps, TRX e isometrie presenti nel catalogo;
- storico comparabile / `ULTIMA VOLTA` preservato;
- firma d'integrità set-level presente;
- filtro dati zero-work presente;
- compatibilità vecchi campi manubri presente.

### Limite del test
In questo ambiente non è stato possibile eseguire un vero smoke-test interattivo in Chromium per una policy di navigazione del browser. La release è stata quindi verificata staticamente e sintatticamente, non con click end-to-end su un browser reale.

---

## 4. Esito finale del red team

**Nessun motivo tecnico o scientifico per tornare alla V10.3.1 come motore di selezione**, purché:
- il MASTER rimanga stabile;
- H11 continui a trattare i suoi coefficienti come euristiche;
- endurance/skill restino subordinati al recupero e all'obiettivo;
- il log reale continui a essere la fonte di verità;
- il backup venga mantenuto.

La release è quindi adatta a essere usata come base operativa **HYBRIDPOWER HP1.0 / H11** e a iniziare una seduta oggi.
