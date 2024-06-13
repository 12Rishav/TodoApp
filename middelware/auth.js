
const jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticate = (req, res, next) => {
    console.log("req",req.headers.authorization)
    const token = req.headers.authorization
    console.log("🚀 ~ authenticate ~ token:", token)
    if (!token) return res.status(401).send('Access denied');
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("🚀 ~ authenticate ~  decoded:",  decoded)
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).send('Invalid token');
    }
};

module.exports = authenticate;
