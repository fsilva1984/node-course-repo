
/*

Sentido da aula, criar um sitema de rotas deixando a aplicacao
mais organizada e facil de ler

*/


// Modules
const express = require("express")
const router = express.Router()
const path = require("path")
const directToPath = path.join(__dirname, "../Files")

// environment variable
const log = console.log;


// sistem routers until the directori
router.get('/add', (req, res) => {

  res.sendFile(`${directToPath}/addUsers.html`)
})

// inster data
router.post('/save', (req, res) => {

  const body = req.body

  log( `Usuario: ${body.name} idade: ${body.age}`)

})


// page search to id
router.get("/:id", (req, res) => {

  /*
  o get vai pegar o objeto que esta sendo pesquizado
  apartir dos dois pontos, o req vai tratar com a propriedade 'params' e tudo o que receber o id
  */

 const id = req.params.id

 log( `/id: ${ id } encontrado !` )

 res.sendFile(`${directToPath}/users.html`)
})



// defined file and directori main
router.get("/", (req, res) => {

 res.sendFile(`${directToPath}/index.html`)
})





// import app routers
module.exports = router