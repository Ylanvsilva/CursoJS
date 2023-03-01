//! For

console.log('Linha 0');
console.log('Linha 1');
console.log('Linha 2');
console.log('Linha 3');
console.log('Linha 4');
console.log('Linha 5');


//* i - index
//*                0       1      2
const frutas = ['Maçã', 'Pêra', 'Uva', 'Ylan', 'Vinicio', 'Santos'];

for (let i = 0; i <= frutas.length; i++) {
    console.log(`Indice ${i}`, frutas[i]);
}

//? -----

for (let i = 0; i <= 5; i++) {
    console.log(`Linha ${i}`);

    const par = i % 2 === 0 ? 'par' : 'impar';
}