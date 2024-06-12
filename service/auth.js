const jwt = require('jsonwebtoken');
const { insertOrUpdateUser, getUserByEmail, getUserByEmailAndToken } = require('../models/auth');
const { sendMagicLink } = require('./mailer');

const generateToken = (email) => {
    return jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

const register = async (email) => {
    const token = generateToken(email);
    await insertOrUpdateUser(email, token);
    await sendMagicLink(email, token);
    return true;
};

const verifyToken = async (token) => {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const rows = await getUserByEmailAndToken(decoded.email, token);
        if (rows.length > 0) {
            return rows[0];
        }
        return null;
    } catch (error) {
        return null;
    }
};

const checkEmail = async (email) => {
    const rows = await getUserByEmail(email);
    return rows;
};

module.exports = { register, verifyToken, checkEmail };
