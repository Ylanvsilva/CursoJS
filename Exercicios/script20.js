//! Criança esperança

let input = require('readline-sync');

console.log('Muito obrigado por ajudar!');

console.log(`[1] para doar R$10`)
console.log(`[2] para doar R$25`)
console.log(`[3] para doar R$50`)
console.log(`[4] para doar outros valores`)
console.log(`[5] para cancelar`)

let escolha = Number(input.question('Digite o numero correspondente a sua doação: '));

if (escolha === 1) {
    console.log(`Você doou R$10!`);
} else if (escolha === 2) {
    console.log(`Você doou R$25!`);
} else if (escolha === 3) {
    console.log(`Você doou R$50`);
} else if (escolha === 4) {
    let outrosValores = Number(input.question(`Digite quantos reias você gostaria de doar R$`))
    console.log(`Você doou R$${(outrosValores).toFixed(2)} reias`);
} else {
    console.log(`Cancelado, ate a proxima!`)
}