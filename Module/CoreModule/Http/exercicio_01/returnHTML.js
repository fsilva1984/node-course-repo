

const http = require("http");

const server = http.createServer

server((req, res) => {

  res.statusCode= 200;
  res.setHeader('Contenty-Type', 'text/html');
  res.end('<h1>Server On In localhost: port: 3000</h1>')

}).listen(3000, () => {

  console.log("Server On \nlocalhost:3000")

})
















