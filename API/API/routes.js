const express = require('express');
const pool = require('./db');

const router = express.Router();

// Rota para listar todos os usuários
router.get('/users', (req, res) => {
    pool.query('SELECT * FROM users', (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
});

// Rota para adicionar um novo usuário
router.post('/users', (req, res) => {
    const { username, password,email } = req.body;
    pool.query('INSERT INTO users (username, email, password) VALUES ($1, $2,$3)', [username, password,email], (error, result) => {
        if (error) {
            throw error;
        }
        res.status(201).send(`Usuário ${username} criado com sucesso.`);
    });
});
// Rota para autenticar um usuário
router.post('/auth', (req, res) => {
    const { email, password } = req.body;
    pool.query('SELECT * FROM users WHERE email = $1 AND password = $2', [email, password], (error, results) => {
        if (error) {
            throw error;
        }
        if (results.rowCount === 1) {
            // Usuário autenticado com sucesso
            res.status(200).send('Usuário autenticado com sucesso.');
        } else {
            // Falha na autenticação
            res.status(401).send('Email ou senha incorretos.');
        }
    });
});


module.exports = router;
