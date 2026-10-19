# Rapporto QA – ISTQB CTFL 4.0 / versione corretta

**Data:** 19 ottobre 2026  
**Oggetto:** correzione del pacchetto multi-file per GitHub Pages `ISTQB_GitHub_Pages.zip`.  
**Base di test:** HTML sorgente fornito, ZIP precedente, PDF ufficiali A/B/C/D e relativi PDF delle soluzioni; Appendice A nei PDF A e A-SOL.  
**Ambito:** correzione difetti noti, nuovo formulario navigabile, homepage, navigazione, simulazioni, regressione su PC/mobile simulato.

## 1. Defect confermati e corretti

| ID | Defect | Causa / risoluzione | Esito |
|---|---|---|---|
| BUG-01 | Apostrofi visualizzati come `undefined` nell'indice syllabus e nelle spiegazioni | Aggiunta la mappatura `'` → `&#39;` in `esc()` di `js/app.js` | CORRETTO / RETEST PASS |
| BUG-02 | Appendice A, domanda A21: la chiave nell'app assegnava il punto alla risposta B anziché A | Impostata come corretta A, coerentemente con la spiegazione ufficiale: `a) È corretta`, `b) Non è corretta` | CORRETTO / RETEST PASS |
| BUG-03 | Set A, domanda 40, risposta D: coda aggiuntiva `Appendice: Domande aggiuntive` | Rimosso il testo estraneo, mantenuta soltanto la risposta del PDF A | CORRETTO / RETEST PASS |
| BUG-04 | Set B, domanda 40, risposta D: coda aggiuntiva `V i 1 6` | Rimossi i caratteri estranei, mantenuta soltanto la risposta del PDF B | CORRETTO / RETEST PASS |

**Nota imprescindibile su BUG-02:** il PDF ufficiale `ITASTQB-QTEST-FL-2023-A-SOL.pdf`, pagina 41, contiene una *incongruenza interna*: la tabella riepilogativa della domanda A21 riporta **B** come chiave, ma la spiegazione della stessa riga stabilisce che **A è corretta** e **B è sbagliata**. Anche il testo del quesito e il significato della piramide di test sostengono A. Si è quindi corretta l'app secondo la spiegazione ufficiale, **non** secondo la cella incoerente della tabella; la fonte non è stata modificata. Questo conflitto resta un'anomalia della fonte, non un difetto residuo del codice.

## 2. Miglioramenti richiesti

- Rimosso il tasto **Verifica formattazioni** e la relativa schermata tecnica.
- Il **Formulario** è una pagina dedicata con indice laterale, struttura simile al syllabus, navigazione precedente/successiva e quattro argomenti: stima a tre punti, livello di rischio, copertura, estrapolazione.
- Collegati **8 quesiti ufficiali** pertinenti alle formule, ciascuno con testo e opzioni originali, verifica interattiva e **spiegazione ufficiale** già presente nei PDF delle soluzioni. Il formulario non registra risposte nel quiz e non modifica i punteggi.
- Esplicitata la differenza fra formule presenti nel syllabus, trasformazioni algebriche derivate e formula specifica del quesito C-31.
- Homepage ridisegnata con tre accessi (syllabus, formulario, simulazioni); menu delle simulazioni e pulsante d'avvio separati da uno spazio visibile su desktop e mobile.
- Entrando nel formulario, un esame in corso viene messo in pausa.

## 3. Esecuzione e risultati

| Ambito | Esito |
|---|---|
| Test dinamici Chromium, viewport desktop 1440×900 e mobile 390×844 | **310/310 PASS** |
| Controlli statici, sintassi di 12 JS, riferimenti a CSS/JS, confronto dataset, SHA-256 delle immagini | **47/47 PASS** |
| Analisi dei valori limite sulla soglia 65% (A: 25/40, 26/40; Appendice: 16/26, 17/26) | **4/4 PASS** |
| Totale verifiche registrate | **361/361 PASS** |
| Pagine del syllabus aperte e navigate | **79/79**, sia su desktop sia su mobile simulato |
| Domande presenti e navigabili nei set | **186/186**; modalità mista aggiuntiva da 40 |
| Formula / quesiti associati / spiegazioni | **4 argomenti / 8 quesiti**, in entrambi i viewport |
| Immagini originali | **149/149**, byte e SHA-256 corrispondenti |
| Risposte e spiegazioni dei 186 quesiti rispetto allo ZIP precedente | Solamente 3 modifiche di dati autorizzate: A-A21.correct, A-40.choiceText.d, B-40.choiceText.d; tutti gli altri campi invariati |
| Console JavaScript dell'app in browser simulato | **Nessuna eccezione** nei percorsi testati |
| Test di salvataggio sessione / ripristino | PASS con memoria persistente **simulata** |
| Pausa, ripresa, scadenza timer, consegna automatica | PASS |

**Evidenze incluse:** `QA_EVIDENZE_BROWSER.json`, `QA_EVIDENZE_STATICHE.json`. Il conteggio di 361 comprende test di interfaccia, controlli aggregati e controlli statici; non equivale a 361 requisiti indipendenti.

## 4. Limitazioni e rischi residui

1. **Deploy reale GitHub Pages non verificato:** i browser disponibili nell'ambiente di collaudo bloccano per policy la navigazione diretta verso `http://localhost` e `file://`. Ho eseguito i test funzionali con gli stessi HTML, CSS, JS e dati caricati *inline* in Chromium, controllando separatamente presenza e integrità di tutti i file e asset. Ciò non certifica HTTP, configurazione Pages e cache del sito effettivamente pubblicato.
2. **Compatibilità su dispositivi reali non verificata:** viewport/mobile emulato su Chromium, non Safari/iPhone fisico.
3. **Persistenza reale non verificata:** testata con `localStorage` simulato nel browser di collaudo; non prova il funzionamento con cache, privacy mode o sessione reale su Pages.
4. **Fedelità visuale delle figure:** tutte le immagini sono identiche byte per byte e i link esistono, ma non è stato riesaminato a vista ogni elemento di ogni tabella/figura ufficiale.
5. **Conflitto del PDF A-SOL / A21:** descritto al §1; è un'anomalia della fonte da documentare, non da occultare.

## 5. Esito QA

**APPROVATO per la consegna del pacchetto correttivo**, limitatamente ai test descritti. Nessun defect applicativo nuovo è stato confermato durante il collaudo di questa versione. Rimane necessario uno **smoke test sul link GitHub Pages pubblicato**, in particolare su dispositivo iOS, prima di dichiarare pienamente collaudata la distribuzione in produzione.
