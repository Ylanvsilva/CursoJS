//! Exercicio com logica de programação

/**
 ** Escreva uma função que recebe um numero e retorne o seguinte:
 ** Numero e divisivel por 3 = Fizz
 ** Numero e divisivel por 5 = Buzz
 ** Numero e divisivel por 3 e 5 = FizzBuzz
 ** Numero NÃO e divisivel por 3 e 5 = retorna o proprio numero
 ** Checar se o numero e realmente um numero = retorna o proprio numero
 ** Use a função com numeros de 0 a 100
 */

function fizzbuzz(numero) {
    if (typeof numero !== 'number') return numero;
    if (numero % 3 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    return numero;
}

console.log('a', fizzbuzz('a'));

for (let i = 0; i <= 100; i++) {
    console.log(i, fizzbuzz(i))
};