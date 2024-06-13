const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const sendMagicLink = async (email, token) => {
    const url = `http://localhost:${process.env.PORT}/auth/verify?token=${token}`;
    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Your Magic Link',
        text: `Click here to login: ${url}`,
        html: `<a href="${url}">Click here to login</a>`,
    });
};

module.exports = { sendMagicLink };
