//! Contador inteligente

var input = require('readline-sync');

let inicio = Number(input.question('Qual o valor inicial? '));

let fim = Number(input.question('Qual o valor final? '));

if (inicio < fim) {
    while(inicio <= fim) {
        console.log(inicio);
        inicio++;
    };
} else if (inicio > fim) {
    while(inicio >= fim) {
        console.log(inicio);
        inicio--;
    };
} else {
    console.log('Valores iguais');
}