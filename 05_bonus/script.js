/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
function _saluto(name) {
    const now = new Date();
    const hours = now.getHours();

    if (hours <= 13) return console.log(`Buongiorno ${name}`);
    if (hours > 13 && hours <= 17) return console.log(`Buonpomeriggio ${name}`);
    if (hours > 17) return console.log(`Buonasera ${name}`);
    return console.log(undefined);
};

const saluto = name => {
    const now = new Date();
    const hours = now.getHours();

    if (hours <= 13) return console.log(`Buongiorno ${name}`);
    if (hours > 13 && hours <= 17) return console.log(`Buonpomeriggio ${name}`);
    if (hours > 17) return console.log(`Buonasera ${name}`);
    return console.log(undefined);
}
// Invoca la funzione qui e stampa il risultato in console

saluto(`Mario`)

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.