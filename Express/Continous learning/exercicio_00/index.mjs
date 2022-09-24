/*

sentido da aula e 
montar um servidor basico
'estrutura inicial'

*/



// modulo
import express from "express";


//  variaveis de ambient
const app = express()
const log = console.log;


// metodo para obter requisicao e resposta
app.get("/", (req, res) => {

res.send("hello, world")

}).listen(3000, ()=> log(

  'Server running at \r\nhttp://127.0.0.1:3000/'
))