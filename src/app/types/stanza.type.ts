//In TypeScript, un type è uno strumento per definire una "forma" di oggetti. Specifica quali proprietà un oggetto deve avere e di che tipo devono essere. Serve a definire un tipo di dati strutturato che viene utilizzato per rappresentare le stanze nel sistema, assicurando che i dati siano sempre consistenti e corretti. Nel mio caso, il tipo Stanza garantisce che ogni oggetto stanza abbia queste proprietà:

//La parola chiave export rende il tipo Stanza disponibile per essere importato ed utilizzato in altri file. In questo caso, app.component.ts lo importa per utilizzarlo.
export type Stanza = {
    id: number, // Identificativo unico della stanza
    tipologia: "Singola" | "Doppia" | "Tripla", // Tipologia della stanza
    descrizione: string, // Descrizione della stanza
    prezzo: number; // Prezzo della stanza
}
