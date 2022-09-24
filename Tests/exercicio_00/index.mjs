
// Modules

import inquirer from "inquirer";
import chalk from "chalk";
import fs from "fs";



// call functions
findFile()




// functions

const log = console.log;

function findFile(){

  const msg = chalk.cyan.bold(" Find ")
  inquirer.prompt([{
  
    type: "input",
    name: "check",
    message: msg

  }]).then(( answer )  => {
  
    const input = answer['check']

    if ( check( input ) ) { 
      
      log(chalk.green.bold("OK"))
    }


    log(chalk.red.bold(" Not fund "))

    const msgList = chalk.green([
      'index', 'value', 'type'
    ])

    inquirer.prompt([{
    
      type: "list",
      name: "newFile",
      message: msgList

    }]).then(( answer ) => {
      
    
    }).catch(err => log(err))
  })
}



// function check if file exist
function check(params) {
  
  if (fs.existsSync(`Files/${ params }.json`)) {
    return true
  }

  return false
}




//  create file
function createNewFile( params ){
  fs.writeFileSync(`Files/${ params }.json`, (err) => log(err))
}














