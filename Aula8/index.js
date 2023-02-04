//? Concatenação + Template strings

const nome = 'Ylan Vinicio';
const sobrenome = 'Santos Silva'; 
const idade = 21;
const peso = 60;
const alturaEmM = 1.76;
let indiceDeMassaCorporal; //* peso / (altura * altura)
indiceDeMassaCorporal = peso / (alturaEmM * alturaEmM)
let anoNascimento;
anoNascimento = 2023 - idade

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'Kg tem', alturaEmM, 'de altura e seu IMC é de', indiceDeMassaCorporal, nome, 'nasceu em', anoNascimento)

//* Concatenando strings + numeros

console.log(nome + '' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + ' kg');

//* Template strings

console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceDeMassaCorporal}`);