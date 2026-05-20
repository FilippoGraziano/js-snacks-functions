/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
function _saluto(name) {
    const hours = new Date().getHours();
    let message = `Buonasera`

    if (hours <= 13) message = `Buongiorno`;
    else if (hours <= 17) message = `Buonpomeriggio`;
    return console.log(`${message} ${name}`);
};

const saluto = name => {
    const hours = new Date().getHours();
    let message = `Buonasera`

    if (hours <= 13) message = `Buongiorno`;
    else if (hours <= 17) message = `Buonpomeriggio`;
    return console.log(`${message} ${name}`);
}
// Invoca la funzione qui e stampa il risultato in console

saluto(`Mario`)

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.