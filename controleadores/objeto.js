import { getTodosObjetos } from "../servicos/objeto"

function getTodosObjetos(req,res){

        res.json(getTodosObjetos())(
        )
    }
    function getObjeto(req,res){

        const id = req.params.id
        const objeto = getObjetoPorId(id)

        res.json(objeto)
    }

    function postObjeto(req,res){
        const objetoNovo = req.body
        insereObjeto(objetoNovo)
        res.send("objeto inserido com sucesso")
    }
module.export = {
    getObjeto,
    getTodosObjetos,
    postObjeto
}