



import inquirer from "inquirer";
import chalk from "chalk";
import fs, { existsSync } from "fs"

operation();
const _ = console.log;








function operation() {

  const exit = chalk.yellowBright.black(" Obrigado por usar o Account ")
  const msg1 = chalk.bgCyanBright(" O que vc deseja fazer ")
  const choices = chalk.green(['Criar conta',
  'Consultar Saldo',
  'Depositar',
  'Sacar',
  'Sair',])
  inquirer.prompt([{
  
    type: "list",
    name: "action",
    message: msg1,
    choices: choices

  }])
  .then(( answer )=> {
  
    const action = answer['action']

    if (action === 'Criar conta') {

    }else if ('Consultar Saldo') {
    }else if ('Depositar') {

    }else if ('Sacar') {
    }else if ('Sair') {

      _(exit)
      process.exit()

    }

  

  }).catch(err => _(err))

}





















//function create account
function creatAccount() {

  _( chalk.bgGreenBright.black(" Parabens por escolher nosso banco " ))
  
  _( chalk.bgGreen(" Defina as opcoes de sua conta a seguir ") )

  buildAccount()

}















//build account
function buildAccount() {

  const msg2 = chalk.bgCyanBright(" Digite um nome para sua conta ")
  inquirer.prompt([{
  
    name: "accountName",
    message: msg2

  }])
  .then(( answer )=> {
  
    console.info(answer['accountName'])

    const accountName = answer['accountName']



    //Account exist ?
    if (!fs.existsSync('accounts')) {
    
      fs.mkdirSync('acounts')
    }




    //if exist the file, then show a message
    if (existsSync(`account/${accountName}.json`)) {
    
      _( chalk.bgRed.black(" Esta conta ja existe, escolha outro nome "))

      buildAccount(accountName)
    }



    //if not exist the file, then create a
    fs.writeFileSync(
    `account/${accountName}.json`,
    '{"balance":0}',
    err => _(err)
    )




    _(chalk.bgGreenBright(" Paraben sua conta foi criada "))

    operation()


  }).catch( err => _(err) )
  
}














// add an amount to user account
function deposit() {

  const msg3 = chalk.bgCyanBright.black(" Qual o nome da sua conta ")

  inquirer.prompt([{
  
    name: "accountName",
    message: msg3

  }])
  .then(( answer ) => {
    
    const accountName = answer['accountName']

   if (!checkAccount( accountName )) {
  
    return deposit()
   }




   const msg4 = chalk.bgCyanBright.black(" Quanto vc deseja depositar ")

   inquirer.prompt([{
  
    name: "amount",
    message: msg4

   }]).then(( answer ) => {
  
    const amount = answer['amount']
    addAmount( accountName, amount)
    operation()
  
   })


  }).catch(err => _(err))
}




















//function check account
function checkAccount( accountName ) {
  
  if (! fs.existsSync(`account/${ accountName }.json`)) {

    _(chalk.bgRed.black(" Esta conta nao existe tente novamente "))

    return false
    
  }

  return true


}













//get account data
function getAccount( accountName ) {
  const accountJSON = fs.readFileSync(`account/${ accountName }.json`, { encoding: "utf-8", flag: "r" })

  return JSON.parse( accountJSON )

}











// function for add amounts at account
function addAmount(accountName, amount) {
  const accountData= getAccount( accountName )

  if (! amount ) {
    
    _( chalk.bgRed.black(" Ocorreu um erro, tente novament mais tarde "))

    return deposit()
  }




  accountData.balance = parseFloat(amount) + parseFloat(accountData)



  fs.writeFileSync(
    `account/${accountName}.json`,
    JSON.stringify( accountData ),
    err => _( err )
  )

  _(chalk.green(` Foi depositado na sua conta o valor de R$${amount}`))
}











//return account balance
function getBalance() {

  const msg5 = chalk.bgCyanBright.black(" Qual o nome da sua Conta ")
  inquirer.prompt([{
  
    name: "accountName",
    message: msg5

  }])
  .then(( answer ) => {
  
    const accountName = answer['accountName']


    if (! checkAccount( accountName )) {
    
      return getBalance()
    }
  

    const accountData = getAccount(accountName)
  })
}
