
import http from "http";
import * as fs from "fs";
import url from "url";

const server = http.createServer(function(req, res){

  const infoUrl = url.parse(req.url, true)
  const name = infoUrl.query.name

  if ( ! name ) {
    fs.readFile('index.html', function(err, data){
    
      res.writeHead(200, {"Content-Type":"text/html"})
      res.write(data)
      return res.end()
    })
  } else {
    fs.writeFile('file.txt', name, function (err, data) {
      
      res.writeHead(302, {
        Location: '/'
      })

      return res.end()
    })
  }

})

server.listen(5500, () => {

  console.warn('Server at running\nhttp://127.0.0.1:5500')
})






