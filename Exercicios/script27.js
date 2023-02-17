//! Contador inteligente

let input = require('readline-sync');

let inicial = Number(input.question('Digite o numero inicial: '));

let final = Number(input.question('Digite o numero final: '));

if (inicial < final) {
    while(inicial <= final) {
        console.log(inicial);
        inicial++;
    }
} else if (inicial > final) {
    while(inicial >= final) {
        console.log(inicial);
        inicial--;
    }
} else {
    console.log('Valores iguais!');
}