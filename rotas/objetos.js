import { Router } from "react-router-dom"

const {getObjeto} = require("../controleadores/objeto")
const router =Router()

router.get('/',getObjeto)

router.get('/:id',getObjeto)

router.post('/',postObjeto)

router.patch('/:id', patchCurso)

module.export = router