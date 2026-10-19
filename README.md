# ISTQB CTFL 4.0.1 – Studio, formulario e simulazioni

**Versione: formulario approfondito, 19 ottobre 2026.**

Questa cartella costituisce l'intero sito statico per GitHub Pages.

## Aprire il sito

Per pubblicare, estrarre lo ZIP e copiare **tutti i file e le cartelle interne** nella cartella principale del repository GitHub Desktop. Conservare `index.html`, `css/`, `js/`, `assets/` e i file connessi nella stessa struttura. In GitHub Desktop: *Commit to main*, poi *Push origin*.

Il progetto non richiede librerie esterne o servizi online per la pagina di studio.

## Formulario rinnovato

Le quattro sezioni (stima a tre punti, livello di rischio, calcolo della copertura, estrapolazione) ora comprendono:

1. Che cosa significa il concetto: spiegazione didattica basata sul syllabus.
2. Citazioni testuali con paragrafo e pagina verificati contro il PDF italiano CTFL v4.0.1.
3. Legenda delle variabili.
4. Formule leggibili con frazioni impaginate e indicazione del tipo di fonte.
5. Calcolo svolto, dal syllabus o dalla soluzione ufficiale (oppure segnalato come esempio didattico).
6. Errori tipici da evitare.
7. Domande ufficiali collegate e spiegazioni **integrali**, comprese le premesse con i calcoli prima delle opzioni.

Le **formule inverse** sono chiaramente classificate come trasformazioni algebriche derivate, non come enunciati autonomi del syllabus. La **formula di C-31** è identificata come modello specifico della domanda, non formula generale della tecnica di estrapolazione.

Puoi aprire i paragrafi esatti del syllabus dall'argomento del formulario. Le spiegazioni delle soluzioni possono essere aperte direttamente, senza dover rispondere prima.

## Integrità

Questa revisione **non modifica** i cinque file delle domande, le sei parti del syllabus, né i 149 asset originali rispetto alla versione precedente corretta.

I quattro defect storici BUG-01–BUG-04 rimangono corretti. È stato inoltre corretto il nuovo **BUG-05**, che eliminava la premessa della spiegazione prima delle risposte a), b), c), d).

## Test eseguiti

- `QA_EVIDENZE_BROWSER.json`: 310 controlli superati su viewport desktop e mobile Chromium.
- `QA_FORMULARIO_MIRATO.json`: 132 controlli mirati superati, inclusa la visibilità delle premesse ufficiali.
- `QA_VERIFICHE_STATICHE.json`: 55 controlli statici superati, inclusi gli estratti letterali e gli asset.
- `RAPPORTO_QA_FORMULARIO.md`: descrizione dei test, dei defect e delle limitazioni.

I conteggi comprendono verifiche parzialmente sovrapposte; non rappresentano 497 requisiti indipendenti. GitHub Pages pubblicato e Safari/iOS reali **non** sono stati collaudati.

## Fonti

- ISTQB CTFL Syllabus italiano v4.0.1, §§ 4.2.1, 4.2.2, 4.3.1, 4.3.2, 5.1.4, 5.2.1 e 5.2.3 (pagine 43–46 e 54–58).
- PDF delle simulazioni A, Appendice A, B, C e D e relative giustificazioni delle risposte.
