//! Conversão moeda n vezes

let input = require('readline-sync');

var contador = 1;

var n = Number(input.question('Quantas vezes você deseja converter? '));

var dolar = 5.22;

while (contador <= n) {
    let real = Number(input.question('Digite o valor em Reais R$'));

    contador++;

    console.log(`O valor ${real} em dolares é US$${(real / dolar).toFixed(2)}`);
};