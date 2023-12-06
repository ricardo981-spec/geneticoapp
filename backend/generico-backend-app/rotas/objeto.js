const { Router } = require("express");
const { getObjeto, getObjetos, postObjeto, patchCurso } = require("../controladores/objeto");


const router =Router()

router.get('/', getObjetos);

router.get('/:id', getObjeto);

router.post('/', postObjeto);

router.patch('/:id', patchCurso)

module.exports = router