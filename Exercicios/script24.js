//! Somador numerico

let input = require('readline-sync');

let contador = 1;

let soma = 0;

while (contador <= 5) {
    soma += Number(input.question(`Digite o ${contador} valor: `));

    contador++;
}

console.log(`A soma dos valores digitados é: ${soma}`);