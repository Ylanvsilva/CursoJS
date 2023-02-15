let input = require('readline-sync');

let contador = 1;

let soma = 0;

let maior = 0;

let menor = 0;

while (contador <= 5) {
    let valor = Number(input.question(`Digite o ${contador} numero: `));

    if (valor > maior) {
        maior = valor;
    }
