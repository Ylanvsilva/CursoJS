//! Minha tabuada

var input = require('readline-sync');

let numero = Number(input.question(`Escolha um numero para ver sua tabuada: `));

let contador = 0;

do {
    console.log(`${numero} x ${contador} = ${numero * contador}`);
    contador++;
} while (contador <= 10);