/**
 ** Tipos de dados primitivos
 *! String, number, undefined, null, boolean, symbol
 */
const nome = 'Ylan'; //* string
const nome1 = "Ylan"; //* string
const nome2 = `Ylan`; //* string

const num1 = 10; //* number
const num2 = 10.52; //* number

let nomeAluno; //* undefined -> não aponta para local nenhum na memória
const sobrenomeAluno = null; //* Nulo -> não aponta pra local nenhum na memória

const boolean = true; //* Boolean = true, false (lógico)

console.log(typeof nome, nome);

let a = 2;
const b = a;
console.log(a, b); //* 2, 2

a = 3;
console.log(a, b); //* 3

//? -----

/**
 ** Aritméticos
 *! + Adição / Concatenação (- / *)
 *! ** Potenciação
 *! % Resto da divisão
 ** Ordem de precedencia
 *! ()
 *! **
 *! * / %
 *! + -
 */

/** 
 ** Operadores de Incremento e Decremento
 *! Incremento = ++
 *! Decremento = --
*/

let contador = 1;
contador++; //* 2
contador++; //* 3
++contador; //* 4
++contador; //* 5
console.log(contador);

/** 
 ** Operadores de atribuições
 *! +=
 *! -=
 *! *=
 *! /=
 *! **=
*/

let contador1 = 0;
contador += 2; //* contador = contador + 2
contador += 2;
contador += 2;
console.log(contador);

let contador2 = 2;
contador2 *= 2; //* contador = contador * 2
contador2 *= 2;
contador2 *= 2;
console.log(contador);

//? -----

//* NaN - Not a number

const num0 = 10;
const num01 = 'Ylan';
console.log(num0 * num01);

/**
 ** Converter string para number
 *! parseInt(INTEIRO)   
 *! parseFloat(Decimal)
 *! Number(Número)
 *
*/
const num02 = parseInt('5');
const num03 = parseFloat('5.2');
const num04 = Number('5');