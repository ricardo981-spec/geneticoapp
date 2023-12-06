const { getTodosObjetos, getObjetoPorId, insereObjeto, modificarObjeto } = require("../servicos/objeto")

function getObjetos(req,res){
    res.json(getTodosObjetos())
}


function getObjeto(req,res){

    const id = req.params.id
    const objeto = getObjetoPorId(id)

    res.send(objeto)
}

function postObjeto(req,res){
    const objetoNovo = req.body
    insereObjeto(objetoNovo)
    res.send("Objeto inserido com sucesso!!")
}
function patchCurso(req,res){
    const id = req.params.id
    const body = req.body
    
    modificarObjeto(body, id)
    res.send("Objeto modificado com sucesso")
}

module.exports = {
    getObjeto,
    getObjetos,
    postObjeto,
    patchCurso
}