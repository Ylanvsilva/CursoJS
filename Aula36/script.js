//* For in -> le os indices ou chaves do objeto

const pessoa = {
    nome: 'Ylan',
    sobrenome: 'Vinicio',
    idade: 30
}

for (let key in pessoa) {
    console.log(chave, pessoa[key]);
}

console.log(pessoa.nome);
//! OU
console.log(pessoa['nome']);

//!                0       1      2
const frutas = ['Pera', 'Maçã', 'Uva'];

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }

for (let indice in frutas) {
    console.log(frutas[indice]);
}