//! Apto carteira

let input = require('readline-sync');

let anoNascimento = Number(input.question('Qual seu ano de nascimento? '));

let dataAtual = new Date();

let anoAtual = dataAtual.getFullYear();

let anoPessoa = anoAtual - anoNascimento;

if (anoPessoa >= 18) {
    console.log(`Você tem ${anoPessoa} e ja pode tirar carteira de trânsito.`);
} else {
    console.log(`Você tem ${anoPessoa} e ainda não pode tirar carteira de trânsito.`);
};