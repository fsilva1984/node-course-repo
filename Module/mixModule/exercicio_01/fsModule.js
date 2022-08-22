
//modulo para criar o servidor
const http = require("http")
//modulo para 
const fs = require("fs")

const server = http.createServer((rer, res) => {
  //qui eu chamo a extesao do modulo readFile = le o arquivo
  fs.readFile('message.html', (err, data) => {//funcao me mostrara os dados ou o erro
    /*aqui a resposta da requisicao sera com o writeHead trazendo o status e 
    o conteudo - do typo : texto / html
    */
    res.writeHead(200, {'Content-Type': 'text/html'})

    /*Depois que o programa sabe o que ele vai chamar e qual 
    o status deve ser lancado, qual e o conteudo e tipo do arquivo
    entao renderizamos ele */
    res.write(data)

    //por fim finalizamos a resposta
    res.end()
  })

})

server.listen(3000, () => {
  console.log("Server On\nlocalhost:3000")
})








