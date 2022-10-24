
/*
Objetivo da aula : with para
itera um objeto de dados.

*/

//   modules
const express = require("express")
const exphbs = require("express-handlebars")
const text = require("./textBlog")


// executando a funcao express
const app = express()

//destructure a method of express-handlebars
const { engine } = exphbs

//text to site blog
const tx = text()

//set para o funcionamento do handlebars
app.engine("handlebars", engine())
app.set("view engine", "handlebars")

// ler o body
app.use(express.urlencoded({ extended: false }))

// page bloge post
app.get("/post", (req, res) => {

  const post = {
    
    title: 'Aprenda NodeJS',
    category: 'learng progamam',
    body: tx,
    comments: 76,
    views: 1819
  }

 res.render("postBlog", { post })
})


//renderizando a pagina authenticated
app.get("/noAuth", (req, res) => {

  res.render("noAuth")
})

// pegando o que vem do formulario
app.post("/auth", (req, res) => {

 const body = req.body
 console.log(body)

  const user = [
    body.name,
    body.surname,
    body.age,
    body.profession
  ]

  res.render("dashboard", {user})
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

