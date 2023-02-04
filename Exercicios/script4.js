//! Teste dos triângulos

let readline = require('readline-sync');
let a = Number(readline.question('Digite o lado A: '));
let b = Number(readline.question('Digite o lado B: '));
let c = Number(readline.question('Digite o lado C: '));

const triangulo = Math.abs(b - c) < a && a < b + c && Math.abs(c - a) < b && b < c + a && Math.abs(a - b) < c && c < a + b;

const equilatero = a == b && b == c && c == a;

const escaleno = a != b && b != c && c != a;

console.log(`Valores digitados: ${a}, ${b} e ${c}`);

console.log(`Triângulo: ${triangulo}`);

console.log(`Equilátero: ${equilatero}`);

console.log(`Escaleno: ${escaleno}`);