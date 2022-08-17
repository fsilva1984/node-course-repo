



//core module



const readline = require("node:readline")

const { createInterface } = readline


const rl = createInterface({

  input: process.stdin,
  output: process.stdout

})

rl.question('Raiz ^2: ', (x)=> {

 console.log(`A Raiz quadrada de: ${x} e ${Math.sqrt(x)}`)
 rl.close()

})

setTimeout(()=>{
  console.clear()
}, 10000)