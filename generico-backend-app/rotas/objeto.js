const { Router } = require("express");
const { getObjeto, getObjetos, postObjeto, patchCurso } = require("../controladores/objeto");
const { deleteObjeto } = require("../servicos/objeto");


const router =Router()

router.get('/', getObjetos);

router.get('/:id', getObjeto);

router.post('/', postObjeto);

router.patch('/:id', patchCurso)

router.delete('/:id', deleteObjeto)

module.exports = router