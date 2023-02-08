//! Dependentes funcionarios

let input = require('readline-sync');

let nome = input.question('Digite seu nome: ');

let salario = Number(input.question('Seu salario atual: R$'));

let dependentes = Number(input.question('Quantos dependentes você tem? '));

if (dependentes === 0) {
    console.log(`${nome}, Seu salario teve um aumento de 5%, com ${dependentes} dependetes, R$${(salario + (salario * 0.05)).toFixed(2)}`);
    salario += salario * 0.5
} else if (dependentes <= 3) {
    console.log(`${nome}, Seu salario teve um aumento de 10%, com ${dependentes} dependetes, R$${(salario + (salario * 0.10)).toFixed(2)}`);
    salario += salario * 0.10
} else if (dependentes <= 6) {
    console.log(`${nome}, Seu salario teve um aumento de 15%, com ${dependentes} dependetes, R$${(salario + (salario * 0.15)).toFixed(2)}`);
    salario += salario * 0.15
} else {
    console.log(`${nome}, Seu salario teve um aumento de 18%, com ${dependentes} dependetes, R$${(salario + (salario + 0.18)).toFixed(2)}`);
    salario += salario * 0.18
};