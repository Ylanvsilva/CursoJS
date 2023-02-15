//* var, let e const

const verdadeira = true;

/**
 * * Let tem escopo de bloco { ... bloco }
 * * Var só tem escopo de função
 */

let nome = 'Ylan'; //* criando
var nome2 = 'Ylan'; //* criando


if (verdadeira) {
    let nome = 'Vinicio' //* criando
    var nome2 = 'Santos'; //* redeclarando

    if (verdadeira) {
        var nome2 = 'Silva'; //* redeclarada
        let nome = 'Outra coisa';
    }
}

console.log(nome, nome2);

//? -----

function falaOi () {
    var sobrenome = 'Ylan'

    if (verdadeira) {
        let nome = 'Luiz';
        console.log(sobrenome);
    }

    console.log(sobrenome);
}

falaOi();

//? ----- Com var ocorre hosting

var sobrenome = 'Ylan';

console.log(sobrenome);

//? ----- Com let nao ocorre hosting

let sobrenome = 'Ylan';

console.log(sobrenome);
