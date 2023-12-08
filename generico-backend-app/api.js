const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const rotaObjetos = require("./rotas/objeto")

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

app.use('/api', rotaObjetos);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});