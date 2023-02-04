//? Numbers

//* IEEE 754-2008 Padrão JAVASCRIPT para numeros com casas decimais

let num1 = 1; //* number
let num2 = 2.5; //* number

console.log(num1.toString() + num2); //* Para converter em string

num1 = num1.toString(); //* Transforma a variavel num1 em string

console.log(num1.toString(2)); //* Converte a variavel para número binario

console.log(num1.toFixed(2)); //* Para permitir apenas que apareça 2 casas decimais

console.log(Number.isInteger(num1)); //* Para saber se o numero e inteiro ou nao

//! Isso e uma conta invalida?

let temp = num1 * 'Ola';

console.log(Number.isNaN(temp))

//! -----

//? Somando números decimais

let n1 = 0.7;
let n2 = 0.1;

n1 = ((n1 * 100) + (n2 * 100)) / 100; //* Outra foram de resolução para alcançar o numero 0.8
n1 = ((n1 * 100) + (n2 * 100)) / 100; //* Outra foram de resolução para alcançar o numero 0.9
n1 = ((n1 * 100) + (n2 * 100)) / 100; //* Outra foram de resolução para alcançar o numero 1.0

n1 += n2; //* n1 = n1 + n2 // 0.8
n1 += n2; //* 0.9
n1 += n2; //* 1.0
n1 += n2; //* 1.1
n1 += n2; //* 1.2
n1 += n2; //* 1.3
n1 += n2; //* 1.4
n1 += n2; //* 1.5
n1 += n2; //* 1.6
n1 += n2; //* 1.7
n1 += n2; //* 1.8
n1 += n2; //* 1.9
n1 += n2; //* 2.0

n1 = parseFloat(n1.toFixed(2)); //* Com essa conversão para numero flutuante, consigo fazer com que o 1.0 se torne um numero inteiro, ja o 1.1 nao é!

//* ou utilizando Number

n1 = Number(n1.toFixed(2));

console.log(n1);

//? -----

console.log(typeof num1); 