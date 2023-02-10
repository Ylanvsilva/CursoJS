//! Criança esperança

let input = require('readline-sync');

console.log('Muito obrigado por ajudar!');

console.log(`[1] para doar R$10`)
console.log(`[2] para doar R$25`)
console.log(`[3] para doar R$50`)
console.log(`[4] para doar outros valores`)
console.log(`[5] para cancelar`)

let escolha = Number(input.question('Digite o numero correspondente a sua doação: '));

switch(escolha) {
    case 1:
        console.log(`Você doou R$10!`);
        break;
    case 2:
        console.log(`Você doou R$25!`);
        break;
    case 3:
        console.log(`Você doou R$50`);
    case 4:
        let outrosValores = Number(input.question(`Digite quantos reias você gostaria de doar R$`));
        console.log(`Você doou R$${(outrosValores).toFixed(2)} reias`);
        break;
    case 5:
        console.log(`Você doou R$0`);
        escolha = 0;
        break;
    default:
        console.log(`Cancelado, ate a proxima!`);
};

console.log(`Sua doação foi ${escolha.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`);