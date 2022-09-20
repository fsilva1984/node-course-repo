import chalkAnimatio from "chalk-animation";
import inquirer from "inquirer";
import chalk from "chalk";
import fs from "fs";


const err = new TypeError(chalk.red.bold(' Ouve um pequeno Problema tente Novamente '))
const _ = console.log;
peso()

function peso(){

  const msg = chalk.bgCyanBright.black(" Seu peso ? ")
 inquirer.prompt([{

  type: "number",
  name: "peso",
  message: msg

}])
.then(( answer ) => {
 let pesoInfo = answer['peso']

  if (! fs.existsSync("user/pesoInfo.json")) {
    fs.writeFileSync("user/pesoInfo.json", '{"peso": 0}')
  }
   
  altura()
})
.catch( e => _( e, err ))
}



function altura() {

  const msg = chalk.bgCyanBright(" Sua altura ? ")
  inquirer.prompt([{
  
    type: "number",
    name: 'altura',
    message: msg
  }])
  .then(( answer ) => {
  
    const alturaInfo = answer['altura']

    if (! fs.existsSync("user/alturaInfo.json")) {
      fs.writeFileSync("user/alturaInfo.json", '{"altura": 0}')
    }

    _('Ok')
  
  })

}
