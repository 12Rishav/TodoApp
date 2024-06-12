const pool = require('../utils/db');

const insertOrUpdateUser = async (email, token) => {
    await pool.query('INSERT INTO users (email, token) VALUES ($1, $2) ON CONFLICT (email) DO UPDATE SET token = $2', [email, token]);
};

const getUserByEmail = async (email) => {
    const { rows } = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    return rows;
};

const getUserByEmailAndToken = async (email, token) => {
    const { rows } = await pool.query('SELECT * FROM users WHERE email = $1 AND token = $2', [email, token]);
    return rows;
};

module.exports = { insertOrUpdateUser, getUserByEmail, getUserByEmailAndToken };
