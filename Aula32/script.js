//! Atribuição via desestruturação [ARRAYS]

//*              0  1  2  3  4  5  6  7  8
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [um, dois, tres, ...resto] = numeros;

//? ...rest = pega o resto das coisas
//? ...spread = espalha o resto das coisas

console.log(um, dois, tres);
console.log(resto);

//? -----

const [um, , tres, , cinco, , sete];

console.log(um, tres, cinco );

//? -----

//*                   0          1          2
//*                0  1  2    0  1  2    0  1  2
const numeros = [ [1, 2, 3]. [4, 5, 6], [7, 8, 9]];

const [, [, , seis]] = numeros;
//! OU
const [lista1, lista2, lista3] = numeros;

console.log(numeros[1][2]);
//! OU
console.log(lista[2]);