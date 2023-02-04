//! SOMA

let readline = require('readline-sync');
let num1 = Number(readline.question('Digite um número: '));
let num2 = Number(readline.question('Digite um segundo número para somar: '));
let soma = num1 + num2;

console.log(`A soma é ${soma}`);