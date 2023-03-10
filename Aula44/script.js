//! Tratando e lançando erros (try, catch, throw)

try {
    console.log(naoExisto);
} catch (e) {
    console.log('naoExisto não existe');
    console.log(e);
}

//? -----

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser numeros');
    }

    return x + y;
}

try {
    console.log(soma(1, 2));
    console.log(soma(1, '2'));
} catch (error) {
    //console.log(error);
    console.log('Alguma coisa mais amigavel para o usuario')
}