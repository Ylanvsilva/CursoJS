//* Os textos em Javascript são indexados, ou seja possuem caracteres

let umaString = "Um \"texto\""; //* Para usar aspas dentro de duas aspas
let umastring = "Um \\texto"; //* Duas barras invertidas para criar uma barra no texto digitado entre duas aspas

console.log(umaString[4]); //* Usando os colchetes, mostra na variável o caractere de acordo com a númeração

console.log(umaString.concat('', 'em', '', 'um')); //* Há possibilidade de se usar funções dentro da variável, por intermedio do <.> 