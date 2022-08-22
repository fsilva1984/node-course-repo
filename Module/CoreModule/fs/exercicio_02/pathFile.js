
const path = require('path')
const fs = require('fs')



const file = path.join(__dirname, 'index.html')

fs.readFile(file,  'utf-8', (err, data) => {
  if( ! data ) console.error(err);
  console.log(data)
})



