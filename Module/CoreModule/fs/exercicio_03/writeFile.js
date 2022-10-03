
//Modulo para criar o servidor
const http = require("http")

//modulo par criar e modificar os arquivos
const fs = require('fs')


http.createServer((req, res) => {

  /*modulo ( url ) usaremos para pega e trata a url
  o parse vai dividir a url em propriedades req.url esta dizendo
  
  */
  const urlInfo = require('url').parse(req.url, true)
  const name = urlInfo.query.name

  /*name carrega o valor do input a qual 
  a url esta apontando*/
  if(!name){
    /*Aqui leremos o arquivo index.html*/
    fs.readFile('index.html', (err, data) => {
      /*writeHead vai passar o status o tipo de conteudo 
      que receberar no caso o texto em html*/
      res.writeHead(200, { 'Content-Type': 'text/html' })
      //a resposta a requisicao sera os dados pedidos
      //escrito na pagina html  
      res.write(data)
      //no final diremos que encerramos ou que nao a mais dados. 
      return res.end()    
    })
  
  } else {
    fs.writeFile("names.txt", name, ()=> {
    
      res.writeHead(302, { Location: "/"})
      return res.end()
    })  
  }


}).listen(3000, () => {
  console.log('Server On \r\nlocalhost:3000')

})















