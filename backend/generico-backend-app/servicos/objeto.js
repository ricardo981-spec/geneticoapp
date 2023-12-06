const fs = require("fs")

const objetos = JSON.parse(fs.readFileSync("objeto.json"))

function getTodosObjetos(){
    return objetos
}

function getObjetoPorId(id){
    const objetoFiltrado = objetos.filter(objeto => objeto.id === id)
    return objetoFiltrado
}

function insereObjeto(objetoNovo){
    const novaListaDeObjetos = [...objetos,objetoNovo]
    fs.writeFileSync("objeto.json", JSON.stringify(novaListaDeObjetos))

}
function modificarObjeto(modificacaos, id){

    const idModificar = objetos.findIndex(objeto => objeto.id === id)

    const conteudoModificado = {...objetos[idModificar], ...modificacaos}

    objetos[idModificar] = conteudoModificado

    fs.writeFileSync("objeto.json",JSON.stringify(objetos))
}
function deleteObjeto(id){
    const objetosFiltrados = objetos.filter(objeto => objeto.id !== id)
    
    fs.writeFileSync("objeto.json",JSON.stringify(objetos))
}
module.exports = {
    getTodosObjetos,
    getObjetoPorId,
    insereObjeto,
    modificarObjeto,
    deleteObjeto
}