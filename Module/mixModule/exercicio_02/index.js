

// DEVOLVER CORRETAMENTE O ARQUIVO

const http = require("http")
const url = require("url")
const fs = require("fs")

const address = 'https://www.meusite.com.br/?page=about'

//criar servidor
http.createServer(function (req, res) {


  res.writeHead(200, {'Content-Type': 'text/html'});
  const infoUrl = new url.URL(address)

 const page = infoUrl.searchParams.get('page')

 res.writeHead(200, { 'Content-Type' : 'text/html'})

  function fnPage(param) {
    
    if( param == 'home') {
      fs.readFileSync('home.html', 'utf-8', (err, data) => {
        
        res.end( data )
        //console.log(data)
      })
    
    }

    if( param == 'about') {
      fs.readFileSync('about.html', 'utf-8', (err, data) => {
        
        //res.end( data )
        console.log(data)

      })
    }else {
    
      fs.readFileSync('manutenc.html', 'utf-8', (err, data) => {
        
        //res.end( data )
        console.log(data)
      })
    }

  }
  fnPage(page)

}).listen(3000); 

console.log('Server running at http://127.0.0.1:3000/');


