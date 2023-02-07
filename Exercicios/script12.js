let input = require('readline-sync');

let peso = parseFloat(input.question('Qual seu peso? '));

let altura = parseFloat(input.question('Qual sua altura? '));

let imc = peso / (altura ** 2);

if (imc >= 18.5 && imc <= 25) {
    console.log(`Seu peso ${(imc).toFixed(2)} é ideial.`);
} else {
    console.log(`Seu peso ${(imc).toFixed(2)} esta fora do peso ideal.`);
};