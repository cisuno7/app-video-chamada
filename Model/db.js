
const { Pool } = require('pg');

const pool = new Pool({
    user: 'postegres',
    host: '1',
    database: 'postegres',
    password: '771421',
    port: 5432,
});

module.exports = pool;









