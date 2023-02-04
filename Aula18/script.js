//? OBJETO

const array = [1, 2, 3];

array.push(4);
array[0] = 'Ylan';
console.log(array);

//?-----

function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
};

const pessoa1 = criaPessoa('Ylan', 'Vinicio', 21);

console.log(pessoa1.nome);

//?-----

const pessoa = {
    nome: 'Ylan',
    sobrenome: 'Vinicio',
    idade: 21,

    fala () {
        console.log(`${this.nome} ${this.sobrenome} esta falando oi...`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa.fala();