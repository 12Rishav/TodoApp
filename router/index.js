const express = require('express');
const todoRouter = require('./todo');
const authRouter = require('./auth');
const authenticate = require('../middelware/auth');
const router = express.Router();

router.use('/auth', authRouter);
router.use('/todo', authenticate, todoRouter);

module.exports = router;