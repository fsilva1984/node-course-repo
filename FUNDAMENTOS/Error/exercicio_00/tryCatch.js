


/*
As palavras em letras maiusculas sao
os comandos traduzidos
*/


const x = 10;

try {

  x = 20
} catch (err) {
  
  console.error(`${err}:Nao atribui-se novo valor a constantes`);
}



/*
try {
  if (! Number.isInteger(x)) throw "Nao e um numero intero"
} catch (error) {
  console.error(error)
}



function err(param) {
  param = "Oppss ah algo errado no momento"
  console.log(param)
}


try {
  if ( true )  {
    x = 10
  }
  
} catch (error) {
  err(error)
}

*/




/*

const err = new Error("Opss ocorreo um erro na execucao")




try {//tentar o que?
  x= 10//executar a funcao

} catch (error) {//se nao e posivel capture o que deu errado

  console.log(err)
  console.log('--------------------------------------')
  console.log({error})
}
*/



