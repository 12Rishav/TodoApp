const { register, verifyToken, checkEmail, login } = require('../service/auth');
const jwt = require('jsonwebtoken');
const CustomError = require('../utils/CustomError');
const constant=require('../constant/constant')

const registerUser = async (req, res, next) => {
    try {
        const { email } = req.body;
        const checkExistingEmail=await checkEmail(email)
        if(checkExistingEmail.length){
            throw new CustomError(409, constant.ERROR.EMAIL_ALREADY_EXIST);
        }
        const result = await register(email);
        if (!result) {
            throw new CustomError(500, constant.ERROR.REGISTER);
        }
        return res.status(200).json({
            code: 200,
            message: constant.SUCCESS.MAGIC_LINK,
        });
    } catch (error) {
        next(error);
    }
};

const loginUser = async (req, res, next) => {
    try {
        const { email } = req.body;
        const existingUser = await checkEmail(email)
        if(!existingUser){
            throw new CustomError(404, constant.ERROR.USER_NOT_FOUND);
        }
        const result = await login(email);
        if (!result) {
            throw new CustomError(500, constant.ERROR.LOGIN);
        }
        return res.status(200).json({
            code: 200,
            message: constant.SUCCESS.MAGIC_LINK,
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
            throw new CustomError(403,  constant.ERROR.INVALID_TOKEN);
        } else {
            const jwtToken = jwt.sign({ email: verifyTokens.email, userId: verifyTokens.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.status(200).json({ token: jwtToken });
        }
    } catch (error) {
        next(error);
    }
};

module.exports = { registerUser, verifyUser, loginUser };
