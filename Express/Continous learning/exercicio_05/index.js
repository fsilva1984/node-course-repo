/*
Sentido da aula, como criar um sistema de rotas
para deixar a aplicacao mais organizada,

para isso criamos o servidor com o express
chamamos o core module path
definimos variaveis para este ambiente
criamos dois middle para pegar o que precisarmos no body
e importamo o arquivo router da aplicacao

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


// Middle para pegar td que estiver no body 
app.use(express.urlencoded({

  extended: true
}))

app.use(express.json())


// import routers
app.use("/users", users)



// aponta o caminho do diretorio principal da aplicacao
app.get("/", (req, res) => {

  res.sendFile(`${directToPath}/index.html`)
})


app.listen(port, ()=> log(

  'Server running at \r\nhttp://127.0.0.1:3000/'
))