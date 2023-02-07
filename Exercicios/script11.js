//! Exercicio par ou impar

let input = require('readline-sync');

let valor = Number(input.question('Que valor você deseja saber se e PAR ou IMPAR? '));

let par = 0;

if (par === (valor % 2)) {
    console.log(`${valor} é PAR`)
} else {
    console.log(`${valor} é IMPAR`)
}