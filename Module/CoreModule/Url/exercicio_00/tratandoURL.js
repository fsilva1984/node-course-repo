
//tratando uma url

const url = require("url")

const address = 'https://www.meusite.com.br/catalogo?produtos=cadeira';

const parsedUrl = new url.URL(address);

console.log(`host: ${parsedUrl.host}`)
console.log(`href: ${parsedUrl.href}`)
console.log(`search: ${parsedUrl.search}`)
console.log(`pathName: ${parsedUrl.pathname}`)
console.log(`searchParams: ${parsedUrl.searchParams}`)
console.log(`serachParams.get: ${parsedUrl.searchParams.get('produtos')}`)
console.log(`protocol: ${parsedUrl.protocol}`)
console.log(`hostName: ${parsedUrl.hostname}`)
console.log(`Origin: ${parsedUrl.origin}`)
console.log(`hash: ${parsedUrl.hash}`)
console.log(`port: ${parsedUrl.port}`)
console.log(`JSON: ${parsedUrl.toJSON}`)

























