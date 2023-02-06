//! Exercicio Emprestimo

let input = require('readline-sync');

let emprestimo = Number(input.question('Quanto de emprestimo você quer pegar com o banco? R$'));

let parcelas = Number(input.question('Você gostaria de dividir em quantas parcelas? '));

console.log(`Seu número de parcelas é ${parcelas} e você terá de pagar R$${((emprestimo + emprestimo * 0.2) / parcelas).toFixed(2)} reias de parcelas para o banco.`);