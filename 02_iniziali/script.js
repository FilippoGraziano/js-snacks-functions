/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function _firstLetterOfArrayElement(array) {
    let firstLetterArray = []
    for (i = 0; i < array.length; i++) {
        let letter = array[i]
        firstLetterArray.push(letter[0])
    };
    return console.log(firstLetterArray);
}

const firstLetterOfArrayElement = array => {
    let firstLetterArray = []
    for (i = 0; i < array.length; i++) {
        let letter = array[i]
        firstLetterArray.push(letter[0])
    };
    return console.log(firstLetterArray);
}


// Invoca la funzione qui e stampa il risultato in console

firstLetterOfArrayElement(names)

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]