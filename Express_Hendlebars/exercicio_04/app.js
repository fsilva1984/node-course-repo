
/*
Objetivo da aula : condicional if else no backend,
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

// ler o body
app.use(express.urlencoded({ extended: true }))
app.use(express.json())



//renderizando a pagina authenticated
app.get("/noAuth", (req, res) => {

  res.render("noAuth")
})

// pegando o que vem do formulario
app.post("/auth", (req, res) => {

 const body = req.body
 console.log(body)

  const user = {

    name: body.name,
    surname: body.surname,
    age: body.age,
    profession: body.profession
  }

  res.render("dashboard", { userData: user })
})


app.get('/dashboard', (req, res) => {

  res.render("dashboard")
})


//renderizando a pagina home
app.get("/", (req, res) => {

  const word = "Home"

 const auth = false

  res.render("home", { word , auth })

})

// porta utilizada pelo servidor 
app.listen(3000, () => { 
  console.log(
  
    "server running at \n\rhttp://127.0.0.1:3000/"
    
  )
})


/*

Nesse codigo nos teremos a pagina home
exibindo uma mensagem 'Cadastre-se'
pois temos uma condicional definida como false
obrigando o usuario a se cadastrar,

clicando no link o user e levado a te a pagina de formulario
onde pegaremos os dados preenchidos para exibilos na pagina
'Dashboard'

*/
