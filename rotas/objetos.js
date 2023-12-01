import { Router } from "react-router-dom"
const {getObjeto} = require("../controleadores/objeto")

const router =Router()

router.get('/',getObjeto)

router.get('/:id',getObjeto)

module.export = router