const express = require("express")
const exphbs = require("express-handlebars")

const app = express()
const { engine } = exphbs

app.engine("handlebars", engine())
app.set("view engine", "handlebars")


app.get("/", (req, res) => {

  res.render("home", { layout: false })

})


app.listen(3000, () => { 
  console.log(
  
    "server running at \n\rhttp://127.0.0.1:3000/"
    
  )
})