//! Atribuição via desestruturação [OBJETO]

const pessoa = {
    nome: 'Ylan',
    sobrenome: 'Vinicio',
    idade: 30,
    endereco: {
        rua: 'Conjunto Francisco Lerindo',
        Numero: 791
    }
}

const nome = pessoa.nome;

//! Atribuição via desestruturação
const { nome = '', sobrenome, idade, } = pessoa;

console.log(pessoa.nome);

//! Mundando o nome da chave

const { nome: teste = '', sobrenome } = pessoa;

console.log(teste, sobrenome);

//! Extraindo

const { endereco: { rua: r = 12345, numero }, endereco } = pessoa;
console.log(r, numero, endereco   );