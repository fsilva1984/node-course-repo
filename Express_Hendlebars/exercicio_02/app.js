
/*
Objetivo da aula : acrescenatr dados a nossa home 
criada na aula anterior.

*/

//   modules
const express = require("express")
const exphbs = require("express-handlebars")


const app = express()
const { engine } = exphbs

//set para o funcionamento do handlebars
app.engine("handlebars", engine())
app.set("view engine", "handlebars")

//renderizando a pagina home
app.get("/", (req, res) => {

  const user = {
  
    name: 'Flavio',
    surname: 'Silva',
    age: 37,
    profession: 'Programador'
  }

  res.render("home", { userData: user })

})

// porta utilizada pelo servidor 
app.listen(3000, () => { 
  console.log(
  
    "server running at \n\rhttp://127.0.0.1:3000/"
    
  )
})
