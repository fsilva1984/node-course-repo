
const path = require("path")


const customPath = "C:/Users/fsilva/repo-node/Module/CoreModule/fs/exercicio_08/file.txt"



"C:/Users/fsilva/repo-node/Module/CoreModule/Path/exercicio_00/relatorio_00.pdf"

//pega o ultimo diretorio onde esta o arquivo
console.log(path.dirname(customPath))

//pega qual o nome do arquivo
console.log(path.basename(customPath))

//pega qual e a extensao do arquivo
console.log(path.extname(customPath))




