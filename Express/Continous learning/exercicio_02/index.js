/*

Sentido da aula e mostrar o uso do Middle,
uma forma interessante deuso do middle seria para
saber se o usuario que  esta acessando uma
dterminada pagina esta logado ou nao

*/








// modules
const express = require ("express");
const path = require ("path")

// environment variables
const app = express()
const port = 3000
const log = console.log;
const directToPath = path.join(__dirname, "Files")



//  Call functions
app.use(checkAuth)






// Authentication function
function checkAuth(req, res, next) {

req.authStatus = false

if (req.authStatus) {

  log("Logged in")
  next()

} else {

  log("Logged out")
  next()
}


}






// getting path main, 
app.get("/", (req, res) => {

res.sendFile(`${directToPath}/index.html`)

}).listen(port, ()=> log(

  'Server running at \r\nhttp://127.0.0.1:3000/'
))