

const fs = require("fs")


fs.writeFileSync('index_01.js', '"Hello, World"')


fs.readFile('./index_01.js', 'utf-8', (err, data) => {

  if(err){
    console.error(err)
    return
  }
  console.log(data)
})











