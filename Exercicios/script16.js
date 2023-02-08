//! Calculo IMC 2.0

let input = require('readline-sync');

let peso = parseFloat(input.question('Qual seu peso? '));

let altura = parseFloat(input.question('Qual sua altura? '));

let imc = peso / (altura * altura);

let status = `Com IMC de ${(imc).toFixed(2)}`

if (imc < 17) {
    console.log(`Muito abaixo do peso! ${status}`);
} else if (imc < 18.5) {
    console.log(`Abaixo do peso! ${status}`);
} else if (imc < 25) {
    console.log(`Peso ideal! ${status}`);
} else if (imc < 30) {
    console.log(`Sobrepeso! ${status}`);
} else if (imc < 35) {
    console.log(`Obesidade ${status}`);
} else if (imc < 40) {
    console.log(`Obesidade severa! ${status}`);
} else {
    console.log(`Obesidade morbida! ${status}`);
};