var nomeUtente = prompt ('Inserisci il tuo nome');
var cognomeUtente = prompt ('Inserisci il tuo cognome');
var colore = prompt ('Il tuo colore preferito?');

var password = nomeUtente + cognomeUtente + colore + 20;

document.getElementById('nome-utente').innerHTML = nomeUtente;
document.getElementById('cognome-utente').innerHTML = cognomeUtente;
document.getElementById('colore').innerHTML = colore;
document.getElementById('password').innerHTML = password;
document.getElementById('container-password').setAttribute('class','visible');
