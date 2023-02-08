//! Placar do jogo

let input = require('readline-sync');

let time1 = Number(input.question('Manchester City = '));

let time2 = Number(input.question('Manchester United = '));

let diferenca = Math.abs(time1 - time2);

if (diferenca === 0) {
    console.log(`Manchester City [${time1}] x Manchester United [${time2}]`);
    console.log('EMPATE!');
} else if (diferenca <= 3) {
    console.log(`Manchester City [${time1}] x Manchester United [${time2}]`);
    console.log('NORMAL!');
} else {
    console.log(`Manchester City [${time1}] x Manchester United [${time2}]`);
    console.log('GOLEADA!');
};