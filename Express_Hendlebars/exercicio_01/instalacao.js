
/*
Objetivo da aula : criar nossa pagina principal.

*/



//   modules
const express = require("express")
const exphbs = require("express-handlebars")


//set para o funcionamento do handlebars
const app = express()
const { engine } = exphbs


app.engine("handlebars", engine())
app.set("view engine", "handlebars")


//renderizando a pagina home
app.get("/", (req, res) => {

  res.render("home")

})

// porta utilizada pelo servidor
app.listen(3000, () => { 
  console.log(
  
    "server running at \n\rhttp://127.0.0.1:3000/"
    
  )
})
