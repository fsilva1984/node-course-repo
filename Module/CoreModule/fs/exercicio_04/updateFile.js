

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
  a url mostra o caminho*/
  if(!name){
    /*Aqui leremos o arquivo index.html*/
    fs.readFile('index.html', (err, data) => {
      /*writeHead vai passar o status o tipo de conteudo 
      que receberar no caso o texto em html*/
      res.writeHead(200, { 'Content-Type': 'text/html' })
      /*a resposta a requisicao sera os dados pedidos
      escrito na pagina html */ 
      res.write(data)
      //no final diremos que encerramos ou que nao a mais dados. 
      return res.end()    
    })
  
  } else {
    /*esta constante ira receber os
    nomes com uma quebra de linha */
   const nameNewLine = name + '\r\n'

   /*aqui com o appendFile ou ceja anexar arquivo,
   assim anexamos conteudo ao arquivo 'names.txt'
   */
     fs.appendFile("names.txt", nameNewLine, ()=> {
    
      /*writeHead no primeiro parametro esta devolvendo o status 302
      no segundo parametro estamos redirecionando para a mesma pagina*/
      res.writeHead(302, { Location: "/"})
      return res.end()
    })  
  }


}).listen(3000, () => {
  console.log('Server On \r\nlocalhost:3000')

})
