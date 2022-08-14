
//lendo argumentos

console.log(process.argv)

//preocess.argv

//importei o core modulo
import { argv } from "node:process"


/*
O retorno do process.argv e um array,
entao posso submetelo ao forEach,
para facilitar a captura do dado que eu quero,
*/
argv.forEach((value, index) => {
  console.log(`${index} ${value}`);
});

//do array retiro so o que eu quero
let argumentSliced = argv.slice(3, 4)

console.log(argumentSliced)

//substitui o sinal de igualdade por um espaco
let apart = argumentSliced[0].replace('=', ' ')

//pronto obtive o dado que esperava
console.log(apart)