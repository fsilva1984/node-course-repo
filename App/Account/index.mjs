
//Modulos externos
import inquirer from "inquirer";
import chalk from "chalk";

//modulo interno
import fs from "fs";

// mensagemde abertura
console.log(chalk.bgBlueBright.black.bold(  " Welcome app " ) )

//print a space
console.log(' ')

//call the main function
operation()

//function main
function operation() {

  /*
  Modulo que vai criar a base da iteratividade,
  com o usuario
  com ele definimos o tipo, nome, mensagem a ser passada, e as perguntas
  como mostra o codego a baixo
  */
  inquirer.prompt([{
  
    type : "list",
    name : "action",
    message : " O que voce deseja fazer ",
    choices : [ "Abrir Conta", "Depositar", "Consultar saldo", "Sacar", "sair" ]

  }])//o then pega a resposta vinda do input e armazena em answer
  .then(( answer ) => {
    
    const action = answer[ 'action' ]
   
    /* as opcoes da funcao options 
    seractratada aqui */
    switch ( action ) {
      case "Abrir Conta":

        createAcconunt();

        break;
    

      default:

      console.log("Escolha outra opcao")
        break;
    }
  
  })
  .catch( ( err ) => console.log( err ) )
}

//create an acconunt
function createAcconunt() {

  //print space
  console.log(" ")

  //msg de acradecimento 
  console.log(chalk.bgGreen.black(" Bemvindo, e obrigado por escolher o nosso banco "))

  //print space
  console.log(' ')
  
  console.log(chalk.green(' Defina as opcoes da sua conta a seguir '))

  /* de forma sincrona por fim chamamos a funcao
  buildAccount() para  de fato criarmos a conta  */
  buildAccount()
}


/* function build account */
function buildAccount(){

  inquirer.prompt([{
  
    name : "accountName",
    message : " Digite um Nome para a sua conta "
  
  }])
  .then(( answer ) => {
    
    const accountName = answer[ 'accountName' ]

    console.info( accountName )

    /* procurando  saber se o diretorio account ja existe */
    if ( ! fs.existsSync( 'accounts' )) {

      /* caso a condicao if testar para false 
      um diretorio sera criado com o mkdirSync */
      fs.mkdirSync( 'accounts' )
      
    }

    /* testaremos se o valor contido em accountName ja existe
    se  exiistir uma msg sera exibida */
    if ( fs.existsSync( `accounts/${ accountName }.jsom`) ) {
    
      //msg de alerta, pois ja existe
      console.warn( chalk.bgRed.black( ' Esta conta ja existe, escolha outro nome '))

      /* Oarquivo ja existindo uma msg e passada
      e a function buildAccount sera chamada*/
     buildAccount()

     //returna ao comeco
      return
    }

    /* se o arquivo nao existir  sera criado normalmente */
    fs.writeFileSync( `accounts/${ accountName }.jsom`, ' { "balance": 0 } ', ( err ) => { console.log( err )} )

    //msg de sucesso sera passada ao usuario
    console.log(chalk.bgGreen.black(" A sua conta foi criada com sucesso " ))
    operation()

  }).catch(( err ) => console.log( err ))
}
