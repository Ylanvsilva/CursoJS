//? Objeto Math

let num1 = 9.54578;
let num2 = Math.floor(num1); //* Arredonda para baixo
let num3 = Math.ceil(num1); //* Arredonda para cima
let num4 = Math.round(num1); //* Arredonda para o mais proximo

console.log(Math.max(1,2,3,4,5,-10,-50,1500,9,8,7,6)); //* Pega o maior numero da sequencia

console.log(Math.min(1,2,3,4,5,-10,-50,1500,9,8,7,6)); //* Pega o menor numero da sequencia

const aleatorio = Math.round(Math.random() * (10 - 5) + 5); //* Gera um numero aleatorio entre 10 e 5

console.log(Math.random()); //* Gera um numero aleatorio

console.log(Math.PI); //* Gera o valor de PI

console.log(Math.pow(2, 10)); //* Potenciação, faz o numero seja elevado ao outro

console.log(num2 ** (1/2));
//*! OU
console.log(num2 ** 0.5);

console.log(100 / 0); //* A conta faz retornar o valor infinity quando ocorrer o resultado zero