import { Component } from '@angular/core';
import { Stanza } from './types/stanza.type';

@Component({
  selector: 'app-root', // Definisce il componente come 'app-root'
  templateUrl: './app.component.html', // Specifica il file HTML associato
  styleUrl: './app.component.scss' // Stili associati
})
export class AppComponent {
  title = 'es-stanza'; // Titolo dell'applicazione


    // toast di bootstrap (alternativa all'alert)
    // Stato del Toast
    // isToastVisible = false;
    // toastMessage = '';
  
    // Mostra il Toast con un messaggio specifico
    // showToast(message: string) {
    //   this.toastMessage = message;
    //   this.isToastVisible = true;
  
      // Nasconde il Toast dopo 3 secondi
    //   setTimeout(() => {
    //     this.isToastVisible = false;
    //   }, 3000);
    // }
  
    // Funzione per nascondere il toast manualmente
    // hideToast() {
    //   this.isToastVisible = false;
    // }


  // Variabili booleane che controllano se un alert è visibile
  isAlertVisible: boolean = false;
  isAlertNotVisible: boolean = false;

  // Lista (array) di oggetti di tipo Stanza, rappresentata da una variabile chiamata stanzeDisponibili.
  stanzeDisponibili: Stanza[] = [
    {   id: 1,
        tipologia: "Singola",
        descrizione: "Stanza singola non finestrata",
        prezzo: 70  },
    {   id: 2,
        tipologia: "Singola",
        descrizione: "Stanza singola vista piscina",
        prezzo: 50  },
    {   id: 3,
        tipologia: "Doppia",
        descrizione: "Stanza doppia matrimoniale",
        prezzo: 80  },
    {   id: 4,
        tipologia: "Doppia",
        descrizione: "Stanza doppia con due letti singoli",
        prezzo: 80  },
    {   id: 5,
        tipologia: "Tripla",
        descrizione: "Stanza tripla con matrimoniale e letto singolo",
        prezzo: 140 },
    {   id: 6,
        tipologia: "Tripla",
        descrizione: "Stanza tripla con tre letti singoli",
        prezzo: 120 }
  ]

// Array che contiene le stanze prenotate
//crea una variabile chiamata stanzePrenotate, che è un array vuoto di tipo any[]. any [] Indica che l'array può contenere elementi di qualsiasi tipo
  stanzePrenotate: any[] = [];
  // stanzePrenotate: Stanza[] = [];
 // Funzione per prenotare una stanza
  prenotaStanza(id: any) {

    // Trova la stanza corrispondente all'ID
    const stanza = this.stanzeDisponibili.find(stanza => stanza.id === id);
    if(stanza)
      //this: fa riferimento all'istanza dell'oggetto o del componente corrente (dove viene usata questa proprietà). 
      this.stanzePrenotate.push(stanza); // Aggiunge la stanza prenotata all'array delle stanze prenotate

    // filter è utilizzato sugli array per creare un nuovo array contenente solo gli elementi che soddisfano una determinata condizione. Restituisce un nuovo array che contiene solo gli elementi per i quali la condizione del callback ha restituito true
    this.stanzeDisponibili = this.stanzeDisponibili.filter(stanza=> stanza.id !== id); // Rimuove la stanza prenotata dall'array delle stanze disponibili

    this.isAlertVisible = true;

    // Nasconde l'alert dopo 3 secondi
    setTimeout(() => {
      this.isAlertVisible = false;
    }, 2000);

    // this.showToast('Stanza prenotata con successo!');
    
  }

 // Funzione per rimuovere una prenotazione
  rimuoviPrenotazione(id: any) {

    // Trova la stanza corrispondente all'ID
    const stanza = this.stanzePrenotate.find(stanza => stanza.id === id);

    if(stanza)
      this.stanzeDisponibili.push(stanza); // Rende la stanza di nuovo disponibile

    this.stanzePrenotate = this.stanzePrenotate.filter(stanza=> stanza.id !== id); // Rimuove la stanza dall'array delle stanze prenotate

    this.isAlertNotVisible = true;

    //Nasconde l'alert dopo 3 secondi
    setTimeout(() => {
      this.isAlertNotVisible = false;
    }, 2000);

    // this.showToast('Prenotazione eliminata con successo!');
  }

  // Funzione per calcolare il totale del prezzo delle stanze prenotate
  calcolaTotale() {

    // reduce : per trasformare un array in un singolo valore (come numero, stringa ecc). Lo fa iterando su ogni elemento dell'array e mantenendo un accumulatore che si aggiorna a ogni passo secondo la funzione di callback che viene fornita.
    // il metodo reduce: per sommare i prezzi di tutte le stanze prenotate e restituire il totale
    //totale (accumulatore) : è il valore che "accumula" il risultato ad ogni iterazione. In questo caso, rappresenta il totale parziale che stai calcolando. Stanza : elemento dell'array su cui reduce() sta attualmente operando. 0 : valore iniziale dell'accumulatore
    return this.stanzePrenotate.reduce((totale, stanza) => totale + stanza.prezzo, 0);
  }

  
}
