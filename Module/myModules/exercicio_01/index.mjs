

/*
instalando, importando 
e usando os modulos 
chalk, lodash
*/



import _ from "lodash"
import chalk from "chalk"



const a = [1, 3, 5, 8] 
const b = [1, 4, 5, 9]

const diff = _.difference(a, b)

console.log(chalk.bgBlue(diff + "!"))

console.log("--------------")

console.error(chalk.bgRed("Error !"))


console.log("--------------")

console.warn(chalk.bgYellowBright("Warning !"))

console.log("--------------")

console.log(chalk.green("=====[green]======"))

console.log("--------------")

console.log(chalk.cyanBright("=====[cyanBright]======"))

console.log("--------------")

console.log(chalk.magenta("=====[magenta]======"))

console.log("--------------")

console.log(chalk.grey("=====[grey]======"))


