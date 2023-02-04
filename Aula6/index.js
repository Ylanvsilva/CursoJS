//? Variaveis

let nome = 'João'; //* String

console.log(nome, 'nasceu em 1984.');
console.log('Em 2000', nome, 'conheceu Maria.');
console.log(nome, 'casou-se com Maria em 2012.');
console.log('Maria teve 1 filho com', nome, 'em 2015.');
console.log('O filho de', nome, 'se chama Eduardo.');

//? -----

let nome1; //* Declarou a variável
nome1 = 'João'; //* Inicializando a variável
console.log(nome1);
nome1 = 'Otávio'
console.log(nome1);

/**
 * * Não podemos criar variáveis com palavras reservadas
 * ! let let;
 * ! let console;
 * ! let if;
 * * Variáveis precisam ter nomes significativos
 * ! let nomeCliente = 'João';
 * ! console.log(nomeCliente);
 * * Não pode começar o nome de uma variável com um número
 * ! let 1nome;
 * * Não podem conter espaços ou traços
 * ! let nome-Cliente;
 * ! let nome Cliente;
 * * Utilizamos camelCase
 * ! let nomeCompletoDoCliente = 'Ylan Vinicio';
 * ! console.log(nomeCompletoDoCliente);
 * * Case-sensitive
 * ! let nomeCliente = 'Ylan';
 * ! let nomeCliente = 'Vinicio';
 * ! console.log(nomeCliente, nomecliente);
 * * Não podemos redeclarar variáveis com let
 * ! let nomeCliente = 'Luiz';
 * ! nomeCliente = 'Otávio';
 * ! console.log(nomeCliente);
 * * NÃO UTILIZE VAR, UTILIZE LET.
 */