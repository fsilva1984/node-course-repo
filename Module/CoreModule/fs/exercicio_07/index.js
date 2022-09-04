
const http = require("http");

const fs = require('node:fs');


const server = http.createServer(function(req, res){

 
  fs.readFile('maintencion.html', function(err, data){ 
   res.writeHead(200, {'Content-Type':'text/html'})
   res.write(data)
   return res.end()
  })

  
  
})


server.listen(3000, ()=> { 
  console.log('Server running at\nhttp://127.0.0.1:3000')
})



