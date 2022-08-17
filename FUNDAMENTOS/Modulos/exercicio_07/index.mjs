

//modulo inquirer
//const inquirer = require("inquirer")

import inquirer from "inquirer"

const { prompt } = inquirer

prompt([
  {name: 'p1', message: 'Qual o seu Nome'},
  {name: 'p2', message: 'Qual a sua idade'}

])
.then((answers)=>{
  console.log(answers)
})
.catch((err)=>{console.log(err)})







//function to clear the command line
setTimeout(()=>{
  console.clear()
}, 12000)



