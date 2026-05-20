/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function _wordsWithSameFirstLetter(array, letter) {
    const upperCaseLetter = letter.toUpperCase()
    let wordsSameFirstLetter = []
    for (i = 0; i < array.length; i++) {
        if (upperCaseLetter === array[i][0]) wordsSameFirstLetter.push(array[i]);
    };
    return console.log(wordsSameFirstLetter);
}

const wordsWithSameFirstLetter = (array, letter) => {
    const upperCaseLetter = letter.toUpperCase()
    let wordsSameFirstLetter = []
    for (i = 0; i < array.length; i++) {
        if (upperCaseLetter === array[i][0]) wordsSameFirstLetter.push(array[i]);
    };
    return console.log(wordsSameFirstLetter);
}

// Invoca la funzione qui e stampa il risultato in console

wordsWithSameFirstLetter(names, `a`)

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]