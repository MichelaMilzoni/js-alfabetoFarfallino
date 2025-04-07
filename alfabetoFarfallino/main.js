// RACCOLTA DATI
const userWord = prompt(`Inserisci una parola`, `Ciao`);
const vowel = [`a`, `e`, `i`, `o`, `u`, `A`, `E`, `I`, `O`, `U`]; //variabile che contiene tutte le vocali (array contain)
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
    // operatore ternario (if, else):
    // newWorld += vowel.includes(character ? character + "f" + character :) 
}

// OUTPUT
alert(newWord);
console.log(newWord);




// per le vocali .toLowercase
//  trasforma in funzione che accetta 2 argomenti:
// parola
// lettera da inserire opzionale il default è F