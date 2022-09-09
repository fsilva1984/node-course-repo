
const fs = require("fs");


fs.writeFileSync('file.txt', "Hello, World !")

fs.readFile('file.txt', 'utf-8', ( err, data ) => {

  if( err ) {
    console.log( err )
  }

  console.log('Conteudo do Arquivo: ',  data )

  fs.stat('file.txt', (err, stat) => {

    if ( err ) {
  
      console.log(err);
      
    } else {
  
      console.log('e um arquivo ? : ' + stat.isFile());

      console.log('-------------------')

      console.log('e um diretorio ? : ' + stat.isDirectory());

      console.log('-------------------')

      console.log('link simbolico: ' + stat.isSymbolicLink());

      console.log('-------------------')

      console.log('data da criacao: ' + stat.ctime);

      console.log('-------------------')
    };
  
  });
  return
})



