var nomeUtente = prompt ('Inserisci il tuo nome');
var cognomeUtente = prompt ('Inserisci il tuo cognome');
var colore = prompt ('Il tuo colore preferito?');

var password = nomeUtente + cognomeUtente + colore + 20;

/*ESERCIZIO BONUS 1*/
// var data = new Date();
// var anno = data.getFullYear();
// var password = nomeUtente + cognomeUtente + colore + anno;

/*ESERCIZIO BONUS 2*/
// var data = new Date();
// var anno = data.getFullYear();
// var password = nomeUtente + ';' + cognomeUtente + ';' + colore + ';' + anno;

document.getElementById('nome-utente').innerHTML = nomeUtente;
document.getElementById('cognome-utente').innerHTML = cognomeUtente;
document.getElementById('colore').innerHTML = colore;
document.getElementById('password').innerHTML = password;
document.getElementById('container-password').setAttribute('class','visible');
