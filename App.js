import React from 'react';
import Login from './views/Login';
import LoseGame from './views/LoseGame';




const AppContainer = () => {
  return (
    <>
      <Login/>
    </>
  )
}

export default AppContainer;

/* import axios from 'axios';
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();

const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres',
  host: '1',
  database: 'postgres',
  password: '771421',
  port: 5432, 
});

const handleLogin = async (email, password) => {
  try {
    const response = await axios.post('http://localhost:3000/login', {
      email,
      password,
    });
    const { token } = response.data;
    return token;
  } catch (error) {
    console.error(error);
    throw new Error('Falha no Login');
  }
};


// Rota para fazer login
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Consulta o banco de dados para obter o usuário com o e-mail fornecido
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    const user = result.rows[0];

    // Verifica se o usuário existe e a senha está correta
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ message: 'E-mail ou senha incorretos' });
    }

    // Cria um token JWT para autenticar o usuário em futuras solicitações
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);

    // Retorna o token para o aplicativo móvel
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

module.exports = app; // Exporta o app para o arquivo server.js */