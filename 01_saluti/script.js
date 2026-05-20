/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.

function _saluto(name) {
    console.log(`Ciao ${name}`);
    return;
};

const saluto = name => console.log(`Ciao ${name}`)

// Invoca la funzione qui e stampa il risultato in console
saluto(`Mario`)


//Risultato atteso se si passa 'Mario': // ciao Mario
