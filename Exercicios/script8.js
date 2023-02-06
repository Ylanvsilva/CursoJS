//! Exercicio Imposto

let input = require('readline-sync');

let valorProduto = Number(input.question('Quanto custou o produto? R$'));

console.log(`Vou pagar de imposto R$${(valorProduto * 0.6).toFixed(2)}`);