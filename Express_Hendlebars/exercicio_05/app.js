
/*
Objetivo da aula: page 404.
*/

const express = require("express")
const exphbs = require("express-handlebars")

const app = express()
const hbs = exphbs.create({partialsDir:['views/partials']})


app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
app.set('views', './views')
app.use(express.static('public'))



app.get('/about',(req, res) => {

  res.render('about')
})


app.get('/contacts',(req, res) => {


  const contact = {

    title: {
    talk: 'Talk To Us'
    },
  
    tel: {
    primary: '(21) 9999-9999',
    secondary: '(21) 9999-0000'
    },

    zap: {
      primary: '(21) 8888-8888',
      secondary: '(21) 8888-0000'
    },

    email: {
    
      primary: 'empresa@contacts.com',
      secondary: 'sac@contacts.com'
    }
  }
  res.render('contacts', { contact })

})



app.get('/blog', (req, res) => {

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

  res.render('blog', { posts })
})

app.get('/', (req, res) => {res.render('home')})

app.use((req, res, next) => {res.render('404')})

app.listen(3000)