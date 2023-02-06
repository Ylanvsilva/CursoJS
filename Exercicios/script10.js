//! Exercicio Calculo Idade

let input = require('readline-sync');

anoNascimento = Number(input.question('Qual seu ano de nascimento? '));

let dataAtual = new Date();

let anoAtual = dataAtual.getFullYear();

let idadeAtual = anoAtual - anoNascimento

if (idadeAtual < 18) {
    console.log(`Sua idade atual é ${idadeAtual} e você esta na Menoridade.`);
} else {
    console.log(`Sua idade atual é ${idadeAtual} e você esta na Maioridade`);
};
