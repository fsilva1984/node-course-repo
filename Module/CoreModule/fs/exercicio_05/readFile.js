
const fs = require("fs")

const address = "/Users/fsilva/repo-node/Module/CoreModule/fs/exercicio_08/file.txt"

fs.readFile(address, 'utf-8', ( err, data ) => {

  if( !data ) {
    console.log( err )
  }
  console.log( data )
})

