//! Fatorial

let input = require('readline-sync');

let n = Number(input.question(`Digite um numero para saber seu fatorial: `));

let contador = n - 1;

let fatorial = n;

do {
    fatorial *= contador;
    contador--;
} while (contador != 0)

console.log(`Fatorial: ${n} é igual a ${fatorial}`);