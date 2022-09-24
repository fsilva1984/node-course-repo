/*

Sentido da aula e
mostrar como usar o modulo path para 
renderizar um HTML como resposta 

*/








// modules
const express = require ("express");
const path = require ("path")

// environment variables
const app = express()
const port = 3000
const log = console.log;
const directToPath = path.join(__dirname, "Files")

// getting path main, 
app.get("/", (req, res) => {

res.sendFile(`${directToPath}/index.html`)

}).listen(port, ()=> log(

  'Server running at \r\nhttp://127.0.0.1:3000/'
))