const express = require('express')
const bodyParser = require("body-parser")
const cors = require ('cors')

const app = express()
const PORT = 3001

app.use(cors())
app.use(bodyParser.json())

app.get('./api/exemplo',(req,res)=>{
     res.json({mensagem: 'bem vindo ao apí'})
})

app.linsten(PORT, () =>{
    console.log (`Servidor rodando na porta ${PORT}`)
})