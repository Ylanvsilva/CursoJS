//! Somador maior e menor

let input = require('readline-sync');

let contador = 1;

let soma = 0;

let maior = 0;

let menor = 0;

while (contador <= 5) {
    let valor = Number(input.question('Digite um numero: '));

    if (valor > maior) {
        maior = valor;
    }

    if (contador === 1) {
        menor = valor;
    }

    if (valor < menor) {
        menor = valor;
    }

    soma += valor;

    contador++;
}

console.log(`A soma dos valores digitados e ${soma}`);

console.log(`O maior valor digitado e: ${maior}`);

console.log(`O menor valor digitado e: ${menor}`);