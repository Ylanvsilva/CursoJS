//! MÉDIA

let readline = require('readline-sync');
let num1 = Number(readline.question('Digite um número: '));
let num2 = Number(readline.question('Digite outro núemro: '));

let media = (num1 + num2) / 2;

console.log(`A média é ${media}`)