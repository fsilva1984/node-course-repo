
/*
Objetivo da aula : condicional if no backend
para autenticar uma validacao no frontend por
exemplo.

*/

//   modules
const express = require("express")
const exphbs = require("express-handlebars")


const app = express()
const { engine } = exphbs

//set para o funcionamento do handlebars
app.engine("handlebars", engine())
app.set("view engine", "handlebars")

//renderizando a pagina dashboard
app.get('/dashboard', (req, res) => {

  res.render("dashboard")
})



//renderizando a pagina home
app.get("/", (req, res) => {

  const user = {
  
    name: 'Flavio',
    surname: 'Silva',
    age: 37,
    profession: 'Programador'
  }

  const word = "Home"

  const auth = true

  res.render("home", { userData: user, word , auth })

})

// porta utilizada pelo servidor 
app.listen(3000, () => { 
  console.log(
  
    "server running at \n\rhttp://127.0.0.1:3000/"
    
  )
})
