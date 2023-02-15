//! Somador maior e menor

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

    if (contador == 1) {
        menor = valor;
    }

    if (valor < menor) {
        menor = valor;
    }

    soma += valor;

    contador++;
}

console.log(`Total dos valores: ${soma}`);

console.log(`Maior valor: ${maior}`);

console.log(`Menor valor: ${menor}`);