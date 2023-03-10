//! Melhor aluno

var input = require('readline-sync');

let quantidadeAluno = Number(input.question('Quantos alunos tem na sua sala? '));

let contador = 0;

let maiorNota = 0;

let melhorAluno = ``;

while (contador < quantidadeAluno) {
    let aluno = String(input.question(`Qual o nome do aluno [${contador + 1}]: `));

    let nota = Number(input.question(`Qual sua nota [${contador + 1}]: `));

    if (maiorNota < nota) {
        maiorNota = nota;
        melhorAluno = aluno;
    }

    contador++;
}

console.log(`A turma tem ${quantidadeAluno} alunos!`);
console.log(`O melhor aluno foi ${melhorAluno}`);
console.log(`A maior nota foi ${maiorNota}`);