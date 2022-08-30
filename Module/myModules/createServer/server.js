//modulo core 'http'
const http = require("node:http")
// meu modulo
const date = require("./myDate")
//method create a server
http.createServer(function( req, res ){//function callback
  res.writeHead(200, {"Conten-Type":"text/plain"})//type MiMe
  res.end(date.myDateTime())//response my Module
}).listen(3000, () => {
  console.log("server On\nlocalhost:3000")
})





