
const  os = require('os')


console.log(os.cpus())
console.log("Mem Free "+os.freemem())
console.log("directory Home "+os.homedir())
console.log("System Operation "+os.type())
console.log("Name of Machine "+os.hostname())

