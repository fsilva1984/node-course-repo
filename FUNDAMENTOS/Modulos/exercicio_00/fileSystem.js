

const fs = require("fs")

//codigo para criar o arquivo

//fs.writeFileSync("file.txt", "##My first file##")

//codigo para ler o arquivo

fs.readFile ( './file.txt' , 'utf8' , ( err , data ) => {    
  if( err ) {  
    console.error( err );
    return ;
  }
  console.log( data );
} );

