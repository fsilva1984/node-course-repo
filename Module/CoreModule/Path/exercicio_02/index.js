const path = require("path")

/* resolve mostra o caminho do arquivo
de onde ele e invocado */
const result = path.resolve('relatorio_00.pdf')

//console.log( result )


/*
Montando um caminho
*/
const midFolder = "Relatorios";
const fileName = "relatorio_00.txt";


const finalPath = path.join( '/', 'Arquivos', midFolder, fileName )


console.log( finalPath )