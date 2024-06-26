
const express = require('express');
const router = require('./router');
const globalErrorHandler = require('./middelware/errorHandler');
const app = express();

app.use(express.json());

app.use(router);

app.use(globalErrorHandler);

module.exports = app;
