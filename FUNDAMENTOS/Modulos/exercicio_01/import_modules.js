
const moduleArithmetic = require('./moduleArithmetic'); 

const myModule = require('./moduleSoma');

const { soma, soma2 } = myModule;

const { 
  adicao, 
  subtracao, 
  mult, 
  divisao, 
  potenciacao, 
  radicQuadrada 
} = moduleArithmetic;

console.log('------------------------------');

soma(23, 32);
soma2(33, 25);

console.log('------------------------------');

adicao(23, 13);
subtracao(45, 32);
mult(25, 3);
divisao(72, 4);
potenciacao(25, 2);
radicQuadrada(9);

console.log('------------------------------');







