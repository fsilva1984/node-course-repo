

import { writeFileSync, readFile } from "node:fs"

writeFileSync('index.html', '<h1>Hello, World</h1>')


readFile('index.html', 'utf-8', (err, data) => {

  if( ! err ) console.log(data)
  else{ console.error("Not fund file",err) }

})





