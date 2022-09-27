/*
Sentido da aula, aplicando estilos
usando o middleware static podemos definir um diretorio 
onde guardaremos todos os estilos da pagina,
tambem como img.
*/



// modules
const express = require ("express");
const path = require ("path")

// environment variables
const app = express()
const port = 3000
const log = console.log;
const directToPath = path.join(__dirname, "Files")
const users = require("./Users/index")


// Middleware para pegar td que estiver no body 
app.use(express.urlencoded({

  extended: true
}))

// middleware JSON
app.use(express.json())


// middleware for img and style
app.use(express.static('Public')) 


// import routers
app.use("/users", users)



// aponta o caminho do diretorio principal da aplicacao
app.get("/", (req, res) => {

  res.sendFile(`${directToPath}/index.html`)
})


app.listen(port, ()=> log(

  'Server running at \r\nhttp://127.0.0.1:3000/'
))