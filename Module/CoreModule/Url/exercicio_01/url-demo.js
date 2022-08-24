
const http = require('http')



http.createServer((req, res) => {

  const urlInfo = require('url').parse(req.url, true)
  //const name = urlInfo.query.name
  //res.write(name)
  console.log(urlInfo)

}).listen(3000, () => {
  console.log("Server On\r\nlocalhost:3000")
})
