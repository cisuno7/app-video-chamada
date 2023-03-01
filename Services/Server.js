const express = require('express');
const routes = require('./routes');

const app = express();
app.use(express.json()); // Middleware para interpretar o corpo das solicitações como JSON
app.use('/api', routes); // Associar as rotas ao caminho '/api'

const port = 3000;
app.listen(port, () => {
    console.log(`API rodando na porta ${port}.`);
});
