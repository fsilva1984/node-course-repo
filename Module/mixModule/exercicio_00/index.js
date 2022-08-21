
//module http para quiar um servidor
const http = require("http")

const server = http.createServer((req, res) => {

  //modulo url para tratar a url
  const urlInfo = require('url').parse(req.url, true)
  //iremos pegar o nome fornecido pelo query
  const name = urlInfo.query.name
  //devolvemos o status 200
  res.statusCode = 200
  res.setHeader("Content-type", "text/html")

  if( ! name ) {
    res.end(`
    <h1>Preencha com seu nome:</h1>
    <form method="GET">
    <input type="text" name="name" placeholder="Seu nome Aqui">
    <input type="submit" value="Enviar">
    </form>`)
  
  }else {
    
    res.end(`<h1>Welcome: ${ name } </h1>`)
  
  }


})

server.listen(3000, ()=> {
  console.log("server On\nlocalhost:3000")
})








