//! Aluno aprovado ou reprovado 2.0

let input = require('readline-sync');

let nota1 = Number(input.question('Qual sua primeira nota? '));

let nota2 = Number(input.question('Qual sua segunda nota? '));

let media = (nota1 + nota2) / 2;

if (media >= 7) {
    console.log(`Aprovado! Com media ${media}.`);
} else if (media >= 5) {
    console.log(`Recuperação! Com media ${media}.`);
} else {
    console.log(`Reprovado! Com media ${media}.`);
};