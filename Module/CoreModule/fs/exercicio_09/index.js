

const fs = require('fs');

//criaremos o arquivo
fs.writeFileSync('file.txt', 'Hello World')

//em seguida deletaremos
fs.unlink('file.txt', (err) => {

  if(err) {
  
    console.error(err)
    return
  }
  console.info("File deletad !")
})





