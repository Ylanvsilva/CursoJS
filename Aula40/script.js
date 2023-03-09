//! Break e continue

//? Continue - continua para proxima iteração

//? Break - sai do laço

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//* for (let i of numeros) { ... }

//* for (let i in numeros) { ... }

//* for (let i = 0; i < numeros.length; i++) { ... }

let i = 0;

do {

    let numero = numeros[i];

    if (numero === 2 || numero === 5) {
        console.log('Pulei o numero 2 e 5');
        i++;
        continue;
    }

    if (numero === 7) {
        console.log('7 encontrado, saindo...');
        break;
    }

    i++;

    console.log(numero);
} while (i < numeros.length)