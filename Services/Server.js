const express = require('express');
const router = require('../api/routes');

const app = express();
app.use(express.json()); 
app.use(router)

const port = 3000;
app.listen(port, () => {
    console.log(`API rodando na porta ${port}.`);
});
module.exports = app;