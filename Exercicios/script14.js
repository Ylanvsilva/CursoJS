//! Aluno aprovado ou reprovado

let input = require('readline-sync');

let nota1 = Number(input.question('Qual é sua primeira nota? '));

let nota2 = Number(input.question('Qual é sua segunda nota? '));

let media = (nota1 + nota2) / 2;

if (media >= 7) {
    console.log(`Você foi aprovado.`);
} else {
    console.log('Você foi reprovado.');
};

console.log(`Com media ${media}`);