# ISTQB CTFL 4.0 — Pacchetto corretto per GitHub Pages

## Come aggiornare il repository con GitHub Desktop

1. Estrai lo ZIP in una cartella del PC.
2. In GitHub Desktop apri il repository e scegli **Repository → Show in Explorer**.
3. Copia **il contenuto** della cartella estratta (file `index.html`, `css`, `js`, `assets`, report ed eventuali altri file) dentro la cartella principale del repository. Conferma la **sostituzione** dei file già esistenti.
4. Torna in GitHub Desktop → scheda **Changes**. Verifica che ci siano modifiche a `index.html`, `css/styles.css`, `js/app.js` e ai tre dataset delle domande interessate.
5. Inserisci un riepilogo come `ISTQB: correzioni e nuovo formulario`, scegli **Commit to main**, quindi **Push origin**.
6. Apri GitHub → **Settings → Pages**; verifica che il deploy usi `main` e `/(root)` e controlla la pubblicazione.

**Importante:** carica tutti i file e le sottocartelle, **non** il file `.zip` come unico elemento. Non cancellare `assets`, `css` o `js`.

## Che cosa cambia

- 4 defect corretti: apostrofi (`undefined`), chiave A-A21, testi estranei in A-40 e B-40.
- Rimossa la funzione tecnica «Verifica formattazioni».
- Formulario a pagina intera, con indice e 8 domande ufficiali corredate delle spiegazioni delle soluzioni.
- Homepage rinnovata e pulsante «Inizia simulazione» separato dal menu a tendina.
- Conservati 186 quesiti, 79 voci syllabus e 149 immagini; **le sole modifiche al dataset** sono documentate nel report QA.

La fonte `ITASTQB-QTEST-FL-2023-A-SOL.pdf`, pagina 41, contiene una contraddizione tra tabella riassuntiva (B) e spiegazione (A) per la domanda aggiuntiva A21. L'app usa A, coerentemente con la spiegazione; vedi `RAPPORTO_QA_CORREZIONI.md`.

## Struttura

- `index.html` — pagina principale.
- `css/styles.css` — stili.
- `js/app.js` — logica app, syllabus, formulario, timer e quiz.
- `js/data/domande-*.js` — 186 domande per set.
- `js/data/syllabus-capitolo-*.js` — 79 voci del syllabus.
- `assets/questions/` e `assets/syllabus/` — 149 immagini, non ricompressi.
- `RAPPORTO_QA_CORREZIONI.md`, `VERIFICHE.txt` e `QA_EVIDENZE_*.json` — rapporto di test ed evidenze.

Non ci sono librerie esterne, CDN o build step: GitHub Pages distribuisce direttamente i file statici.
