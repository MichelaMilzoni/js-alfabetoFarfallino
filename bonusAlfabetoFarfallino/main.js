// per le vocali .toLowercase
//  trasforma in funzione che accetta 2 argomenti:
// parola
// lettera da inserire opzionale il default è F


// DICHIARO UNA FUNZIONE
// eseguo per ogni lettera della parola utente
function transformUserWord (userWord, userCharacter = "F") {
    const vowel = [`A`, `E`, `I`, `O`, `U`]; //variabile che contiene tutte le vocali (array contain)
    let newWord = ""; // variabile modificata

        // se userCharacter non c'è OR LOGICO userCharacter è uno spazio vuoto.trim()(cancella lo spazio vuoto)
    if (!userCharacter || userCharacter.trim() === "") {
        // uso la F di default
        userCharacter = "F";
    }

    for (let i = 0; i < userWord.length; i++) { // il ciclo continua fino a quando la condizione è vera
        const character = userWord[i];
        // controllo se il carattere è una vocale (includes)
        // .includes ritorna vero se nel array contain c'è il valore specificato
        // .includes ritorna falso se nel array contain NON c'è il valore specificato
        if (vowel.includes(character)) {
            // se il valore specificato c'è, sostituiscilo con valore + userCharacter + valore
            newWord += character + userCharacter + character; 
            // altrimenti restituisci il valore originale
        } else {
            newWord += character;
        }
        // operatore ternario (if, else):
        // newWorld += vowel.includes(character ? character + userCharacter + character :) 
    }
    return newWord;
}


// RACCOLTA DATI
const userWord = prompt(`Inserisci una parola`, `Ciao`).toUpperCase().trim();
const userCharacter = prompt('inserisci una lettera per sostituire F (opzionale)', `G`);
const transformedUserWord = transformUserWord(userWord, userCharacter)


// OUTPUT
alert(transformedUserWord);
console.log(transformedUserWord);



