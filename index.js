// Importação do express e das rotas que irão ser criadas
const express = require('express');
const routes = require('./src/routes');
// Fim da importação do express e das rotas

require('./src/database');

// Armazena o express em uma variavel para utilizar suas funcionalidades
const app = express();
app.use(
  express.json({
    limit: "5mb",
    inflate: false
  })
)

app.use(routes);

// Inicia o servidor do express na porta 3000
app.listen(3000, ()=>{
  console.log('Servidor iniciado!');
});