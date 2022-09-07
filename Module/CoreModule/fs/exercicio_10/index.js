
const fs = require('fs')

//metodo para renomear arquivos
fs.rename('file01.txt', 'file02.txt', (error) => {

  if(error){
    /*se nao encontra o arquivo
    mostrara no console o erro */ 
  
    console.error(error)
    return
  }
  //mensage final
  console.info(`file renamead`)
})

setTimeout(() => {

  fs.rename('file02.txt', 'file01.txt', (err) => {
    if (err) {
      console.error('such file not exist', err)
      return
    }
    console.log('Successfully renamed')
  })

}, 8000)


setTimeout(() => {

  console.clear()
  return
}, 12000)