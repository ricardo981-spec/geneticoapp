const fs = requeire("fs")

function.getTodosObjetos(){

    return JSON.parse(fs.readfileSync("obsjeton.json"))
}

function.getObjetoPorId(Id){

    const objetos =  JSON.parse(fs.readfileSync("obsjeton.json"))

    const objetoFiltrado = objetos.filter (objeto => objeto === Id)
    return objetoFiltrado
}
function insereObjeto(objetoNovo){
    const novaListaObjetos = [...objetos,objetoNovo]
    fs.writeFileSync("objeto.json",JSON.stringify(novaListaObjetos))
}

module.exports = {
    getTodosObjetos,
    getObjetoPorId,
    insereObjeto
}