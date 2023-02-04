//? Arrays

//* Strings possuem elementos
//*           01234567891011
const nome = 'Ylan Vinicio'
console.log(nome[10]);

//* Arrays possuem Indices
//*                0       1        2
const alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);

//* Para editar um indice
alunos[0] = 'Eduardo';

//* Para adicionar um indice
alunos[3] = 'Luiza';

//* Adiciona ao final
alunos[alunos.length] = 'Luiza';
alunos[alunos.length] = 'Fábio';
alunos[alunos.length] = 'Luana';

alunos.push('Otávio');

//* Adiciona no começo
alunos.unshift('Luiza')

//* Para remover no final
alunos.pop();

//* Para remover no começo
alunos.shift();

//* Para deletar um indice, ele ficara vazio apos o comando, pois nao ocorrera alteração nos elementos
delete alunos[1];

//* Para fatiar o array
console.log(alunos.slice(0, 3));

//* Alunos e uma instancia de Array?
console.log(alunos instanceof Array);

//* O tipo de array
console.log(typeof alunos);

//* Podemos acessar um elemento inexistente no Array, retorna undefined
console.log(alunos[50]);