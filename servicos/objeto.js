const fs = requeire("fs")

function.getTodosObjetos(){

    return JSON.parse(fs.readfileSync("obsjeton.json"))
}

function.getObjetoPorId(Id){

    const objetos =  JSON.parse(fs.readfileSync("obsjeton.json"))

    const objetoFiltrado = objetos.filter (objeto => objeto === Id)
    return objetoFiltrado
}

module.exports = {
    getTodosObjetos,
    getObjetoPorId
}