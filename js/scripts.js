// PULSANTE GENERA
let pulsanteGenera = document.getElementById("genera");
pulsanteGenera.addEventListener('click',
function() {

// TUTTE LE VARIABILI
let nomeCognome = document.getElementById('nome').value;
let kilometri = document.getElementById('km').value;
let eta = document.getElementById('eta').value;
let prezzo = kilometri * 0.21;
let offerta = 'Standard';
let sconto;
let prezzoFinale = prezzo;

//debug
console.log('nomeCognome', nomeCognome , typeof nomeCognome);
console.log('kilometri', kilometri , typeof kilometri);
console.log('eta', eta , typeof eta);

// TUTTI GLI IF
if (eta == 'minorenne') {
offerta ='Sconto minorenne'
sconto = prezzo * 20 / 100;
prezzoFinale = prezzo - sconto;
}
else if (eta == 'over65') {
offerta = 'Sconto Silver'
sconto = prezzo * 40 / 100;
prezzoFinale = prezzo - sconto;
}

// TUTTI GLI INNER + CLASS
document.getElementById('nome-pass').innerHTML = nomeCognome;
document.getElementById('offerta').innerHTML = offerta;
document.getElementById('carrozza').innerHTML = Math.floor(Math.random()*9) + 1;
document.getElementById('codice').innerHTML = Math.floor(Math.random() * (100000 - 90000 + 1)) + 90000;
document.getElementById('costo').innerHTML = prezzoFinale.toFixed(2);

document.getElementById('riepilogo').className = 'show';
}
);

// PULSANTE ANNULLA
let pulsanteAnnulla = document.getElementById("annulla");
pulsanteAnnulla.addEventListener('click',
function() {

// TUTTI GLI INNER + CLASS
document.getElementById('nome-pass').innerHTML = '';
document.getElementById('offerta').innerHTML = '';
document.getElementById('carrozza').innerHTML = '';
document.getElementById('codice').innerHTML = '';
document.getElementById('costo').innerHTML = '';

document.getElementById('riepilogo').className = 'hidden';
}
);






