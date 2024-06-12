const { register, verifyToken, checkEmail } = require('../service/auth');
const jwt = require('jsonwebtoken');
const CustomError = require('../utils/CustomError');

const registerUser = async (req, res, next) => {
    try {
        const { email } = req.body;
        const result = await register(email);
        if (!result) {
            throw new CustomError(500, 'Error registering user.');
        }
        return res.status(200).json({
            code: 200,
            message: 'Magic link sent to your email.',
        });
    } catch (error) {
        next(error);
    }
};

const verifyUser = async (req, res, next) => {
    try {
        const { token } = req.query;
        const verifyTokens = await verifyToken(token);
        if (!verifyTokens) {
            throw new CustomError(400, 'Invalid token');
        } else {
            const jwtToken = jwt.sign({ email: verifyTokens.email, userId: verifyTokens.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.status(200).json({ token: jwtToken });
        }
    } catch (error) {
        next(error);
    }
};

module.exports = { registerUser, verifyUser };
