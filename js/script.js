// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


var studente = 
{
    nome : 'pippo',
    cognome : 'rossi',
    eta : 18
};

for(k in studente){

    console.log(studente[k]);
}

// FINE PUNTO 1 E 2

var listaStudenti = 
[
    {
        nome : 'paperone',
        cognome : 'rossi',
        eta : 32
    },
    {
        nome : 'pluto',
        cognome : 'rossi',
        eta : 80
    },
    {
        nome : 'paperino',
        cognome : 'rossi',
        eta : 15
    }
];

console.log(listaStudenti);