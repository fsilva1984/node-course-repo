

/*
Objetivo da aula: criar e usar o partials 
em diferentes lugares da aplicacao
*/


const express = require("express")
const exphbs = require("express-handlebars")


const app = express()
const hbs = exphbs.create({
  partialsDir: ["views/partials"]
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')






app.get("/blog", (req, res) => {

  const posts = [
  
  {
    title: "Aprenda NodeJS",
    category: "JavaScript",
    body: "Teste",
    comments: 16
  },

  {
    title: "Aprenda Django",
    category: "Python",
    body: "Teste",
    comments: 86
  },

  {
    title: "Aprenda MySQL",
    category: "MySQL",
    body: "Teste",
    comments: 77
  },

  {
    title: "Aprenda PHP",
    category: "PHP",
    body: "Teste",
    comments: 56
  },
  
  ]

  res.render("blog", { posts })
})




app.get("/", (req, res) => {

res.render('home')
})

app.listen(3000)