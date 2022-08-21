
//retornado um texto para a requisicao

const http = require("http");

const server = http.createServer((req, res)=>{

res.write('Server in localhost: port: 3000')
res.end()
})

const port = 3000

server.listen(port, () => {
  console.log("Server On in\nlocalhost:3000")
})









