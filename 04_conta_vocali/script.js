/* Scrivi una funzione che accetti una stringa 
e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

// Dichiara la funzione qui.
function numberOfVocals(str){
    const vocals = ["a", "e", "i", "o", "u"]
    let counter = 0;
    for(let i = 0; i < str.length; i++){
        if(vocals.includes(str[i])){
            counter++;
        }
    }
    return counter;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(numberOfVocals(word))

//Risultato atteso se si passa 'javascript': 3 (a, a, i)