const http = require("http");
const fs = require('fs');


// crear um servidor 
http.createServer((req, res)=> {

  /* responderemos com o status 200 
  e um conteudo tipo  texto html */
  res.writeHead(200, {'Content-Type' : 'text/html'})
  
  /* ler um arquivo index.html codificacao utf-8
  funcao de callback retornara um erro ou o arquivo */
  fs.readFile('index.html', 'utf-8', (err, data) => {
    
    //tente
    try {
      /*se a data cair no teste dando falsy*/
      if ( !data ) {
        
        /*o arquivo sera criado de forma sincrona
        e escreverar o conteudo da tag h1*/
        fs.writeFileSync(
         'index.html', '<h1>Server running at http://127.0.0.1:3000</h1>'
        );
        
      }
      /*
      por fim a resposta sera o arquivo que foi criado
      ou se ele ja existir sera retornado com sucesso
      */
      res.end(data)
      
    
    } catch (error) {
  
      console.error('Error at Server', error)
      res.write(error, 'utf-8', 'Error at server')
    }
    
  });
  


}).listen(3000, () => {
  console.log('Server running at http://127.0.0.1:3000')
})