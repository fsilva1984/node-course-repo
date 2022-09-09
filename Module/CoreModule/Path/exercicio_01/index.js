
const readline = require("readline")
const path = require("path")

const read = readline.createInterface({
  
  input: process.stdin,
  output: process.stdout
})

let customPath ;

read.question("path to file: ", ( answer ) => {

  customPath = answer

  console.log(path.dirname(customPath))
  console.log(path.basename(customPath))
  console.log(path.extname(customPath))

  read.close()
})






