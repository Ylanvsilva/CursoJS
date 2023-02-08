//! Aproveitamento de um aluno

let input = require('readline-sync');

let nota1 = Number(input.question('Qual sua primeira nota? '));

let nota2 = Number(input.question('Qual sua segunda nota? '));

let media = (nota1 + nota2) / 2;

if (media >= 9) {
    console.log(`Aproveitamento A`);
} else if (media >= 7) {
    console.log(`Aproveitamento B`);
} else if (media >= 5) {
    console.log(`Aproveitamento C`);
} else if (media >= 3) {
    console.log(`Aproveitamento D`);
} else if (media >= 1) {
    console.log(`Aproveitamento E`);
} else {
    console.log(`Aproveitamento F`);
};