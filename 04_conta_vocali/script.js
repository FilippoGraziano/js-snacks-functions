/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function _howManyVowels(word) {
    let wordVowels = [];
    const vowels = `aeiouAEIOU`
    for (i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            wordVowels.push(word[i]);
        }
    };
    const finalString = wordVowels.join(`, `)
    return console.log(wordVowels.length, `(${finalString})`);
}

const howManyVowels = word => {
    let wordVowels = [];
    const vowels = `aeiouAEIOU`
    for (i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            wordVowels.push(word[i]);
        }
    };
    const finalString = wordVowels.join(`, `)
    return console.log(wordVowels.length, `(${finalString})`);
}

// Invoca la funzione qui e stampa il risultato in console

howManyVowels(word)

//Risultato atteso se si passa 'javascript': 3 (a, a, i)