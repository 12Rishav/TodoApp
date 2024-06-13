const pool = require('../utils/db');

const insertUser = async (email, token) => {
        const { rows }= await pool.query('INSERT INTO users (email, token) VALUES ($1, $2)', [email, token])
        return rows
  };
  
  const updateUser = async (email, token) => {
    const { rows }=  await pool.query('UPDATE users SET token = $2 WHERE email = $1', [email, token]);
    return rows
  };
  
const getUserByEmail = async (email) => {
    const { rows } = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    return rows;
};

const getUserByEmailAndToken = async (email, token) => {
    const { rows } = await pool.query('SELECT * FROM users WHERE email = $1 AND token = $2', [email, token]);
    return rows;
};

module.exports = {insertUser, updateUser, getUserByEmail, getUserByEmailAndToken,insertUser };
