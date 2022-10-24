/*
Sentido da aula, como pegar parametros
atravez da url 

*/



// modules
const express = require ("express");
const path = require ("path")

// environment variables
const app = express()
const port = 3000
const log = console.log;
const directToPath = path.join(__dirname, "Files")



app.get("/users/:id", (req, res) => {

  /*
  o get vai pegar o objeto que esta sendo pesquizado
  apartir dos dois pontos, o req vai tratar com a propriedade 'params' e tudo o que receber o id
  */

 const id = req.params.id

 log( `Usuario/id: ${ id } encontrado !` )

 res.sendFile(`${directToPath}/users.html`)
})




app.get("/", (req, res) => {

 res.sendFile(`${directToPath}/index.html`)
})



app.listen(port, ()=> log(

  'Server running at \r\nhttp://127.0.0.1:3000/'
))
