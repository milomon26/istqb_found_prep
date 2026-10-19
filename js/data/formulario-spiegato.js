/* Spiegazioni didattiche verificate sul syllabus CTFL v4.0.1 e sulle simulazioni ufficiali. */
window.ISTQB_FORMULA_LESSONS = [
  {
    "id": "three-point",
    "title": "Stima a tre punti",
    "subtitle": "Tecniche di stima dell’effort del test",
    "source": "Syllabus CTFL v4.0.1 · §5.1.4 · pagine 54–55",
    "syllabusId": "5.1",
    "official": [
      {
        "reference": "Syllabus §5.1.4 · pagina 54",
        "text": "La stima dell’effort del test consiste nel prevedere la quantità di lavoro relativo al testing necessario per raggiungere gli obiettivi dei test di un progetto di test."
      },
      {
        "reference": "Syllabus §5.1.4 · pagina 55",
        "text": "In questa tecnica expert-based, gli esperti effettuano tre stime: la stima più ottimistica (a), la stima più probabile (m) e la stima più pessimistica (b)."
      }
    ],
    "theory": [
      "La stima serve a prevedere l’effort necessario per il testing, non il numero di difetti e nemmeno il tempo certo che sarà impiegato. Il syllabus sottolinea che ogni stima dipende da assunzioni ed è soggetta a errore.",
      "La three-point estimation è una tecnica basata su esperti: invece di scegliere un solo valore, si considerano uno scenario favorevole, uno più probabile e uno sfavorevole. La stima più probabile ha un peso quattro volte maggiore delle altre due nella formula presentata dal syllabus.",
      "Le altre tecniche di stima presentate nello stesso paragrafo sono la stima basata su valori statistici, l’estrapolazione e Wideband Delphi. Non sono sinonimi della stima dei tre punti."
    ],
    "variables": [
      [
        "a",
        "Stima più ottimistica: effort nello scenario favorevole."
      ],
      [
        "m",
        "Stima più probabile: effort considerato più plausibile."
      ],
      [
        "b",
        "Stima più pessimistica: effort nello scenario sfavorevole."
      ],
      [
        "E",
        "Stima finale, cioè media aritmetica pesata delle tre stime."
      ],
      [
        "SD",
        "Errore di misura stimato secondo la formula del syllabus."
      ]
    ],
    "formulas": [
      {
        "title": "Stima finale E",
        "origin": "Formula del syllabus",
        "lhs": "E =",
        "num": "a + 4 × m + b",
        "den": "6",
        "note": "Somma la stima ottimistica, quattro volte quella più probabile e la pessimistica, poi dividi per 6."
      },
      {
        "title": "Errore di misura SD",
        "origin": "Formula del syllabus",
        "lhs": "SD =",
        "num": "b − a",
        "den": "6",
        "note": "Misura l’ampiezza dell’incertezza a partire dalla distanza tra lo scenario pessimista e quello ottimista."
      }
    ],
    "worked": {
      "title": "Esempio presente nel syllabus",
      "source": "Syllabus §5.1.4 · pagina 55",
      "steps": [
        "Valori di partenza: a = 6, m = 9, b = 18 ore-persona.",
        "Sostituisci nella stima: E = (6 + 4 × 9 + 18) / 6 = 60 / 6 = 10.",
        "Calcola l’errore: SD = (18 − 6) / 6 = 12 / 6 = 2.",
        "Risultato riportato nel syllabus: 10 ± 2 ore-persona, cioè tra 8 e 12 ore-persona."
      ]
    },
    "derived": [
      {
        "title": "Ricavare la stima ottimistica a",
        "lhs": "a =",
        "expression": "6E − 4m − b"
      },
      {
        "title": "Ricavare la stima più probabile m",
        "lhs": "m =",
        "num": "6E − a − b",
        "den": "4"
      },
      {
        "title": "Ricavare la stima pessimistica b",
        "lhs": "b =",
        "expression": "6E − a − 4m"
      },
      {
        "title": "Ricavare b dall’errore di misura",
        "lhs": "b =",
        "expression": "a + 6SD"
      },
      {
        "title": "Ricavare a dall’errore di misura",
        "lhs": "a =",
        "expression": "b − 6SD"
      }
    ],
    "mistakes": [
      "Non calcolare la media semplice (a + m + b) / 3 quando il quesito richiede la formula pesata del syllabus.",
      "Non scambiare E, che è la stima finale, con SD, che rappresenta l’errore di misura.",
      "Mantieni le unità di misura: se le stime sono in ore-persona, anche E e SD lo sono."
    ],
    "questions": [
      "A-32"
    ],
    "syllabusIds": [
      "5.1.4"
    ]
  },
  {
    "id": "risk",
    "title": "Livello di rischio",
    "subtitle": "Probabilità, impatto e risk management",
    "source": "Syllabus CTFL v4.0.1 · §§5.2.1 e 5.2.3 · pagine 57–58",
    "syllabusId": "5.2",
    "official": [
      {
        "reference": "Syllabus §5.2.1 · pagina 57",
        "text": "Questi due fattori esprimono il livello di rischio, che è una misura del rischio."
      },
      {
        "reference": "Syllabus §5.2.3 · pagina 58",
        "text": "Nell'approccio quantitativo il livello di rischio è calcolato come moltiplicazione della probabilità del rischio e dell'impatto del rischio."
      }
    ],
    "theory": [
      "Il rischio è un evento potenziale che, se si verifica, può produrre conseguenze negative. Per caratterizzarlo non basta sapere quanto grave sarebbe il danno: servono anche informazioni sulla probabilità che accada.",
      "Nel syllabus il livello di rischio dipende da due fattori indipendenti: probabilità del rischio e impatto del rischio. L’analisi dei rischi di prodotto consente di stabilire dove concentrare le attività di test.",
      "La valutazione può essere quantitativa o qualitativa. Solo nell’approccio quantitativo si applica il prodotto P × I; in quello qualitativo si può usare una matrice del rischio. Non attribuire automaticamente un valore numerico a classificazioni come “alto” o “medio”."
    ],
    "variables": [
      [
        "R",
        "Livello di rischio: misura risultante dalla valutazione."
      ],
      [
        "P",
        "Probabilità del rischio: nei calcoli percentuali, 50% si scrive 0,5."
      ],
      [
        "I",
        "Impatto del rischio: conseguenza economica o altra grandezza quantificata."
      ]
    ],
    "formulas": [
      {
        "title": "Livello di rischio quantitativo",
        "origin": "Relazione esplicitata nel syllabus §5.2.3",
        "lhs": "R =",
        "expression": "P × I",
        "note": "Moltiplica la probabilità numerica per l’impatto. L’unità di misura di R deriva da quella dell’impatto."
      }
    ],
    "worked": {
      "title": "Esempio dalla simulazione ufficiale D-34",
      "source": "Soluzione ufficiale Set D · domanda 34",
      "steps": [
        "Dati della domanda: livello di rischio R = 1.000 dollari; probabilità P = 50%.",
        "Converti la percentuale: 50% = 0,5.",
        "Ricava l’impatto: I = R / P = 1.000 / 0,5 = 2.000 dollari.",
        "Risposta ufficiale: B. L’impatto è di 2.000 dollari."
      ]
    },
    "derived": [
      {
        "title": "Ricavare la probabilità",
        "lhs": "P =",
        "num": "R",
        "den": "I",
        "note": "Valida se I è diverso da zero."
      },
      {
        "title": "Ricavare l’impatto",
        "lhs": "I =",
        "num": "R",
        "den": "P",
        "note": "Valida se P è diverso da zero."
      }
    ],
    "mistakes": [
      "Probabilità e impatto non sono la stessa cosa: un impatto molto alto non implica una probabilità alta.",
      "Non moltiplicare per 50 quando la probabilità è il 50%: usa 0,5.",
      "Le misure qualitative non si inseriscono automaticamente nella formula senza una scala numerica definita."
    ],
    "questions": [
      "D-34",
      "A-35",
      "A-A22"
    ],
    "syllabusIds": [
      "5.2.1",
      "5.2.3"
    ]
  },
  {
    "id": "coverage",
    "title": "Calcolo della copertura",
    "subtitle": "Partizioni, istruzioni e rami",
    "source": "Syllabus CTFL v4.0.1 · §§4.2.1–4.2.2 e 4.3.1–4.3.2 · pagine 43–44 e 46",
    "syllabusId": "4.3",
    "official": [
      {
        "reference": "Syllabus §4.3.1 · pagina 46",
        "text": "La copertura, espressa in percentuale, è misurata come il numero di istruzioni esercitate dai test case diviso per il numero totale di istruzioni eseguibili nel codice."
      },
      {
        "reference": "Syllabus §4.3.2 · pagina 46",
        "text": "La copertura, espressa in percentuale, è misurata come il numero di rami esercitati dai test case diviso per il numero totale di rami."
      }
    ],
    "theory": [
      "La copertura indica quale parte degli elementi di copertura è stata esercitata dai test case. Il tipo di elemento dipende dalla tecnica di test: partizioni di equivalenza, valori limite, istruzioni o rami non sono intercambiabili.",
      "Nel partizionamento di equivalenza si contano le partizioni esercitate almeno una volta rispetto a tutte quelle identificate. Nella BVA si contano gli elementi di copertura previsti dalla versione a 2 o 3 valori descritta nel syllabus.",
      "Nel testing delle istruzioni si contano le istruzioni eseguibili esercitate rispetto al totale. Nel testing dei rami si contano tutti i rami esercitati rispetto al totale dei rami, inclusi i rami non condizionali. Raggiungere il 100% di copertura delle istruzioni non garantisce il 100% di copertura dei rami."
    ],
    "variables": [
      [
        "C",
        "Copertura espressa in percentuale."
      ],
      [
        "e",
        "Numero di elementi di copertura esercitati da almeno un test case."
      ],
      [
        "t",
        "Numero totale degli elementi di copertura identificati o eseguibili, secondo la tecnica."
      ]
    ],
    "formulas": [
      {
        "title": "Formula generale della copertura",
        "origin": "Definizione ricavata dalle metriche del syllabus",
        "lhs": "C =",
        "num": "e",
        "den": "t",
        "tail": "× 100%",
        "note": "Numeratore e denominatore devono contare lo stesso tipo di elemento. t non può essere zero."
      },
      {
        "title": "Copertura delle istruzioni",
        "origin": "Syllabus §4.3.1",
        "lhs": "Copertura =",
        "num": "istruzioni eseguite",
        "den": "istruzioni eseguibili totali",
        "tail": "× 100%",
        "note": "Contare le istruzioni effettivamente esercitate almeno una volta."
      },
      {
        "title": "Copertura dei rami",
        "origin": "Syllabus §4.3.2",
        "lhs": "BCov =",
        "num": "rami esercitati",
        "den": "rami totali",
        "tail": "× 100%",
        "note": "Si considerano i rami condizionali e non condizionali."
      },
      {
        "title": "Copertura delle partizioni",
        "origin": "Syllabus §4.2.1",
        "lhs": "Copertura =",
        "num": "partizioni esercitate",
        "den": "partizioni identificate",
        "tail": "× 100%",
        "note": "Comprende le partizioni valide e invalide identificate."
      }
    ],
    "worked": {
      "title": "Esempio guidato (calcolo didattico, non citazione del syllabus)",
      "source": "Applicazione della formula definita nel syllabus",
      "steps": [
        "Supponi di avere 8 rami nel codice, dei quali 6 sono stati esercitati.",
        "Elementi esercitati e = 6; elementi totali t = 8.",
        "Copertura dei rami = (6 / 8) × 100 = 75%.",
        "Il 25% dei rami non è stato esercitato. Questo dato non dice, da solo, quanti difetti ci siano."
      ]
    },
    "derived": [
      {
        "title": "Ricavare gli elementi esercitati",
        "lhs": "e =",
        "num": "C × t",
        "den": "100"
      },
      {
        "title": "Ricavare gli elementi totali",
        "lhs": "t =",
        "num": "100 × e",
        "den": "C",
        "note": "Valida solo per C diverso da zero."
      }
    ],
    "mistakes": [
      "Non sommare semplicemente le percentuali di copertura di due test case: potrebbero coprire gli stessi elementi.",
      "Non interpretare la copertura al 100% come prova dell’assenza di difetti.",
      "Non confondere la copertura delle istruzioni con quella dei rami o con la copertura degli esiti decisionali."
    ],
    "questions": [
      "B-25",
      "B-24",
      "A-24"
    ],
    "syllabusIds": [
      "4.2.1",
      "4.2.2",
      "4.3.1",
      "4.3.2"
    ]
  },
  {
    "id": "extrapolation",
    "title": "Estrapolazione",
    "subtitle": "Stimare il lavoro a partire dalle iterazioni precedenti",
    "source": "Syllabus CTFL v4.0.1 · §5.1.4 · pagina 55; simulazione ufficiale C-31",
    "syllabusId": "5.1",
    "official": [
      {
        "reference": "Syllabus §5.1.4 · pagina 55",
        "text": "Avendo un numero sufficiente di osservazioni, l’effort richiesto per il lavoro rimanente può essere approssimato estrapolando questi dati (di solito applicando un modello matematico)."
      }
    ],
    "theory": [
      "L’estrapolazione è una tecnica di stima basata su metriche. Si usano dati raccolti durante il progetto attuale per ricavare un’approssimazione dell’effort futuro. Il syllabus la considera particolarmente adatta ai cicli di vita iterativi.",
      "Il syllabus riporta come esempio l’impiego dell’effort medio delle ultime tre iterazioni. Non stabilisce un’unica formula obbligatoria di estrapolazione: il modello dipende da come il progetto decide di elaborare le osservazioni.",
      "La domanda ufficiale C-31 specifica un modello particolare, nel quale l’ultima iterazione pesa tre volte la penultima. Quel modello appartiene al quesito, non è una formula generale da attribuire al syllabus."
    ],
    "variables": [
      [
        "E(n)",
        "Stima dell’effort per l’iterazione n."
      ],
      [
        "A(n−1)",
        "Effort effettivo dell’iterazione precedente."
      ],
      [
        "A(n−2)",
        "Effort effettivo di due iterazioni prima."
      ]
    ],
    "formulas": [
      {
        "title": "Modello fornito dalla domanda ufficiale C-31",
        "origin": "Formula del quesito C-31, NON formula generale del syllabus",
        "lhs": "E(n) =",
        "num": "3 × A(n−1) + A(n−2)",
        "den": "4",
        "note": "L’iterazione precedente pesa tre volte la penultima: per questo il totale dei pesi è 4."
      }
    ],
    "worked": {
      "title": "Calcolo della domanda ufficiale C-31",
      "source": "Soluzione ufficiale Set C · domanda 31",
      "steps": [
        "Il grafico del quesito indica A(4) = 6 e A(3) = 8 giorni-persona.",
        "Per stimare E(5), sostituisci i valori nella formula: [3 × A(4) + A(3)] / 4.",
        "E(5) = (3 × 6 + 8) / 4 = 26 / 4 = 6,5 giorni-persona.",
        "Risposta ufficiale: C. La stima della quinta iterazione è 6,5 giorni-persona."
      ]
    },
    "derived": [],
    "mistakes": [
      "Non confondere l’effort stimato E(n) con quello effettivo A(n).",
      "Non usare i valori stimati del grafico quando la formula richiede quelli effettivi.",
      "Non presentare questa media ponderata 3:1 come formula universale ISTQB."
    ],
    "questions": [
      "C-31"
    ],
    "syllabusIds": [
      "5.1.4"
    ]
  }
];
