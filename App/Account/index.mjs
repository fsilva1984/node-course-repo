
//Modulos externos
import inquirer from "inquirer";
import chalk from "chalk";

//modulo interno
import fs from "fs";

// mensagemde abertura
console.log(chalk.bgBlueBright.black.bold(" Welcome app "))

//print a space
console.log(' ')

//call function
operation()

//function main
function operation() {

  /*
  Modulo que vai criar a base da iteratividade,

  com ele definimos o tipo, nome, mensagem a ser passada, e as perguntas
  */
  inquirer.prompt([{
  
    type : "list",
    name : "action",
    message : " O que voce deseja fazer ",
    choices : [ "Abrir Conta", "Depositar", "Consultar saldo", "Sacar", "sair" ]

  }])//o then pega a resposta vinda do input
  .then(( answer ) => {
    

    const action = answer[ 'action' ]
   
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

  console.log(" ")

  console.log(chalk.bgGreen.black(" Bemvindo, e obrigado por escolher o nosso banco "))

  console.log(' ')
  
  console.log(chalk.green(' Defina as opcoes da sua conta a seguir '))

}
