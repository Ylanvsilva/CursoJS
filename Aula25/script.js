//* if, else if, else

/**
 * * Se (numero >= 0 && numero <= 5) ocorrer, faça isso {código}
 * ! Se não faça isso {o código}
 */

const numero = 10;

if (numero <= 10) {
    console.log('O numero e menor que 10');
};

if (numero >= 0 && numero <= 5) {
    console.log('O numero esta entre 0 e 5.');
} else if (numero >= 6 && numero <= 8) {
    console.log('O numero esta entre 6 e 8');
} else if (1 === 1) {
    console.log('Literal');
} else if (numero >= 9 && numero <= 11) {
    console.log('O numero esta entre 9 e 11');
} else {
    console.log('O numero nao esta entre 0 e 11');
}