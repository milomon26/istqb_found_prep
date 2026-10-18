# ISTQB CTFL 4.0 — GitHub Pages

## Pubblicazione

1. Apri il repository GitHub destinato all’app.
2. Carica **tutti i file e tutte le cartelle** contenuti in questo archivio (non il file ZIP), nella cartella principale del repository.
3. Vai in **Settings → Pages** e seleziona **Deploy from a branch → main → /(root)**. Salva.
4. Apri l’indirizzo GitHub Pages visualizzato in Settings → Pages.

`index.html` è la pagina iniziale; non rinominare le cartelle `js`, `css`, `assets`.

## Composizione

- `index.html`: schermata e collegamenti ai file.
- `css/styles.css`: tutti gli stili originali nell’ordine iniziale più la correzione del layout.
- `js/app.js`: logica originale del quiz e del syllabus, con correzione della navigazione.
- `js/data/domande-*.js`: **186 domande** e relative risposte/spiegazioni originali, divise per set.
- `js/data/syllabus-capitolo-*.js`: **79 voci** del syllabus originali, divise per capitolo.
- `assets/questions/`, `assets/syllabus/`: immagini estratte **byte per byte**, senza modifica o compressione.

Non sono stati cambiati testi, risposte corrette, spiegazioni o pagine del syllabus. Le URI delle immagini incorporate sono diventate percorsi relativi verso file identici.

## Compatibilità

File HTML + script classici, senza dipendenze da CDN e senza richieste fetch: funziona anche aprendo `index.html` localmente.
In GitHub Pages il sito deve essere ospitato su un percorso con la struttura delle sottocartelle intatta.

Per il dettaglio delle verifiche eseguite consultare `VERIFICHE.txt`.
