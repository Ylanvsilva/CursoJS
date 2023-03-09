//! For of

//* For classico - Geralmente com iteraveis (array ou strings)

//* For in - Retorna o indice ou chave (string, array ou objetos)

//* For of - Retorna o valor em si (iteraveis, arrays ou strings)

const nomes = ['Ylan', 'Vinicio', 'Santos'];

for (let i = 0; i , nomes.length; i++) {
    console.log(nomes[i]);
}

//? -----

for (let i in nomes) {
    console.log(nomes[i]);
}

//? -----

for (let valor of nomes) {
    console.log(valor);
}

//? ----- 

nomes.forEach(function (valor, indice, array) {
    console.log(valor, indice, array);
})

//? -----

const pessoa = {
    nome: 'Ylan',
    sobrenome: 'Vinicio'
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}