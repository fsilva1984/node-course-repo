//Criar um Servidor
const http = require('http');

//Modulo Core que trata de Arquivos
const fs = require('fs')

//Criando Nosso servidor
const server = http.createServer(function (req, res) {

  /*
  Core Modulo com seu metodo parse sendo 
  armasenado em uma constante,
  o parse traz a url de quem fez a requisição + um
  boolean true para que sempree seja pasada como verdadeira 
  
  */
  const infoUrl = require('url').parse(req.url, true)
  
  /*
  Aqui consultaremos o valor do input
  atrvez do atributo name
  */
  const name = infoUrl.query.name

  /* se o atributo name e false*/
  if( ! name ) {
    
    /*
    entao leia o arquivo html, para o usuario o preechelo 
    */
    fs.readFile('index.html', function (err, data) {
      
      /*
      respoderemos ao req com o status 200,
      e um html como conteudo de texto 
      */
      res.writeHead(200, { "Content-Type":"text/html" })
      //respoderemos tambem com os dados requeridos
      res.write( data )
      //por fim diremos que acabou
      return res.end() 
    })

  }else {
    
    /*
    Quando o html for renderizado com o if,
    e o formulorio for preenchido e enviado,
    o name tera um valor entao caira aqui no else

    entao criaremos um arquivo daremos um nome e uma
    extencao 

    */
    fs.writeFile('file.txt', name, function (err, data) {
      
      /*
      tendo entao escrito no novo arquivo o valor
      que veio do name
      devolveremos a requisicao, um status code 302
      redirecionando para o inicio
      */
      res.writeHead(302, { Location:'/' })
      //diremos que acabou
      return res.end()
    } )
  }

  

}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');




