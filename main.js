// RACCOLTA DATI
const userWord = prompt(`Inserisci una parola`, `Ciao`);
const vowel = "aeiouAEIOU"; //variabile che contiene tutte le vocali (array contain)
let newWord = ""; // variabile modificata

// SVOLGIMENTO
// eseguo per ogni lettera della parola utente

for (let i = 0; i < userWord.length; i++) {
    const character = userWord[i];
    // controllo se il carattere è una vocale
    // .includes ritorna vero se nel array contain c'è il valore specificato
    // .includes ritorna falso se nel array contain NON c'è il valore specificato
    if (vowel.includes(character)) {
        // se il valore specificato c'è, sostituiscilo con valore + F + valore
        newWord += character + "f" + character; 
        // altrimenti restituisci il valore originale
    } else {
        newWord += character;
    }
}

// OUTPUT
console.log(newWord);