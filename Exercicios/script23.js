//! Conte de zero ate onde quiser

let input = require('readline-sync');

let conta = Number(input.question('Você gostaria de contar ate quanto? '));

let pulo = Number(input.question(`Você deseja ir pulando de quanto em quanto? `));

let y = 0;

while (y <= conta) {
    console.log(`Contando ` + y)

    y += pulo;
}