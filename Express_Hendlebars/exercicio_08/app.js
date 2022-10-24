
/*
Objetivo da aula: adicionar css
as rotas
*/


// modulos nessesarios
const express = require("express")
const exphbs = require("express-handlebars")

/* assim executamos o express armazenando
ele em uma constante */
const app = express()

/* definimos o partials para ser usado em
qualquer lugar do no app */
const hbs = exphbs.create({

  partialsDir: ['viwes/partials']
})


/* deifimos qual o templates a serem usados */
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))





app.get('/', (req, res) => {

 res.render('home')
})


app.listen(3000, () => {

 console.log("Aplication running\n http://127.0.0.1:3000")
})





