
//eventos de codigos sync

//primeiro o javascript lê essa função
function goSync(x) {
//function retorna o parametro mais 10
  return x+10
}

//segunda function a ser lida
function calcSync(param) {
  /*
  verifica se o valor do parametro + o valor
  da function e maior ou igual a 20
  */
  if(param >= 20) {
    endSync()
  }else{
    console.log('Esperando um valor: x > 20')
  }
}

/*
terceira function a ser lida 
sera chamada caso o if teste verdadeiro
*/
const endSync = () => {
  console.log('Success !')
}


calcSync(goSync(31))

