# Rapporto QA – Revisione del formulario ISTQB

**Data:** 19 ottobre 2026  
**Oggetto:** `ISTQB_GitHub_Pages_STUDIO.zip`, revisione del pacchetto precedentemente corretto.

## Esigenza e problema riscontrato

Il formulario precedente elencava formule e domande, ma non spiegava in modo adeguato gli argomenti presenti nel syllabus. Le formule erano rese principalmente come testo in una singola riga. Inoltre, è stato individuato un defect funzionale nella presentazione delle spiegazioni ufficiali:

| ID | Descrizione | Stato |
|---|---|---|
| BUG-01 | Apostrofi convertiti erroneamente in `undefined` | Già risolto; regressione PASS |
| BUG-02 | Chiave della domanda A-A21 non coerente con la spiegazione ufficiale | Già risolto; regressione PASS; resta l'incongruenza nella fonte PDF |
| BUG-03 | Testo estraneo alla risposta D di A-40 | Già risolto; dati invariati rispetto al precedente ZIP corretto |
| BUG-04 | Caratteri estranei nella risposta D di B-40 | Già risolto; dati invariati rispetto al precedente ZIP corretto |
| **BUG-05** | **La funzione `formattedExplanation()` perdeva l'introduzione precedente alle opzioni a), b), c), d), contenente anche calcoli svolti e ragionamenti delle soluzioni ufficiali** | **Risolto: introdotto il rendering dell'introduzione integrale; retest PASS** |

## Modifiche realizzate

- Quattro vere lezioni del formulario, anziché sole righe con formule.
- Riferimenti al testo ufficiale ISTQB con sette citazioni confrontate con le rispettive pagine del PDF.
- Distinzione esplicita tra: citazione ufficiale; spiegazione didattica; trasformazione algebrica; modello specifico di una simulazione.
- Frazioni verticali, caratteri matematici più grandi, nessun overflow orizzontale verificato a 390 px.
- Significato di tutte le variabili, passaggi svolti, casi d'uso e errori frequenti.
- Collegamenti ai paragrafi **esatti** del syllabus (tra cui §§5.1.4, 5.2.1, 5.2.3, 4.3.1 e 4.3.2).
- Otto quesiti ufficiali collegati; possibilità di mostrare subito la spiegazione senza rispondere, oppure verificare la propria scelta. Le spiegazioni del PDF mantengono le introduzioni che precedono le singole opzioni.
- Figure ufficiali delle domande rese visibili nel formulario quando presenti.

## Base di test e risultati

| Attività di verifica | Esito |
|---|---|
| Test di regressione Chromium desktop e mobile (homepage, syllabus 79 voci, modalità d'esame, punteggi, timer, formulario, salvataggio simulato) | **310/310 PASS** |
| Test mirati per le quattro sezioni: teoria, citazioni, variabili, formule, esempi, otto domande, soluzione integrale, assenza overflow e collegamenti al syllabus | **132/132 PASS** |
| Controlli statici: sintassi JS, dataset immutati, syllabus immutato, 149 immagini immutate, sette citazioni confrontate con il PDF ufficiale, paragrafi collegati | **55/55 PASS** |
| Nuovi defect applicativi dopo le correzioni | **0 confermati nei controlli eseguiti** |

I conteggi si sovrappongono; non dichiarano copertura esaustiva né assenza di defect al di fuori dei percorsi di test.

## Limiti del collaudo

- **GitHub Pages live**: questa versione non è stata verificata attraverso l'URL pubblicato.
- **iPhone e Safari reali**: non testati; mobile simulato con viewport Chromium 390×844.
- **localStorage**: simulato nel browser di test; non prova la persistenza nel browser dell'utente.
- L'integrità delle 186 domande e 149 immagini è stata confrontata con il **precedente ZIP già corretto**, non equivale a una nuova revisione semantica di tutte le risposte contro i PDF in questo ciclo.
- Le sette citazioni presentate come ufficiali sono state confrontate testualmente con il syllabus; le altre spiegazioni sono **rielaborazioni didattiche identificate**, non citazioni letterali.

**Esito:** la revisione del formulario è pronta per la consegna e per uno smoke test sul sito pubblicato. Non si dichiara verificata la compatibilità con tutti i browser o dispositivi.
