//! Exercicio seus dolares

let input = require('readline-sync');

let real = Number(input.question('Quantos reais você quer converter para dólares $R'));

let dolares = real / 5.15

console.clear();

console.log(`Você tem exatamente ${dolares.toFixed(2)} dolares.`)