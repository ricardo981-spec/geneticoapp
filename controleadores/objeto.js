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
module.export = {
    getObjeto,
    getTodosObjetos
}