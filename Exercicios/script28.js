//! Melhor aluno

var input = require('readline-sync');

let quantidaDeAlunos = input.question(`Quantos alunos a turma tem? `)

console.clear();

let contador = 0;

let melhorNota = 0;

let melhorAluno = ``;

while (contador < quantidaDeAlunos) {
    let nomeAluno = String(input.question(`Nome do aluno ${contador + 1}: `));
    let notaAluno = Number(input.question(`Nota do aluno ${contador + 1}: `));
    if (notaAluno > melhorNota) {
        melhorNota = notaAluno;
        melhorAluno = nomeAluno;
    }
    console.clear();
    contador++;
}

console.log(`A turma tem ${quantidaDeAlunos} alunos!`)
console.log(`O melhor aproveitamento foi de ${melhorAluno} com a nota ${melhorNota}!`)

//TODO - [] REFAZER O EXERCICIO
//TODO - [] LER O CODIGO E ENTENDER A LOGICA