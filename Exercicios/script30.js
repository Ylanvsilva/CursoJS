//! Conta negativos

let input = require('readline-sync');

let contador = 0;

let negativo = 0;

let numero = 0;

do {
    numero = Number(input.question(`Digito um numero: `));
    
    if (numero < 0) {
        negativo++;
    }

    contador++;
} while (contador < 5)

console.log(`Os numeros negativos sao ${negativo}`);