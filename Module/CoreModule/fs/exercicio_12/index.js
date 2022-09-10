
const fs = require("fs")

const yes = fs.existsSync("./MyFolder")

//verifica se o diretorio existe 
if( ! yes ) {
  console.error("This directory not exit")

} 
// comando cria um diretorio
fs.mkdirSync('MyFolder')
console.log("Directory created successfully")


