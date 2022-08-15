//core module
const minimist = require("minimist")

//module extern
const moduleSoma = require("./moduleSoma")

//retirando o que nao vai servir 
const args = minimist(process.argv.slice(2))

//argumentos que irao receber valores no console
const a = args['a']
const b = args['b']

/*
desestruturacao via atribuicao
do metodo soma (modulo externo)
*/
const { soma } = moduleSoma


//invocacao da function
soma(a, b)



//funcao limpa console

setTimeout(()=>{
  console.clear();
}, 3000);



