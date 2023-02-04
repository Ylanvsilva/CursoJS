//? Function

function saudacao (nome) {
    return `Bom dia! ${nome}`;
}

const variavel = saudacao('Ylan');
console.log(variavel);

//?-----

function soma(x, y) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(2, 2));

//?-----

//* Arrow function
    const Raiz = n => n ** 0.5;
//*

const raiz = function (n) {
    return n ** 0.5
};

console.log(raiz(9))