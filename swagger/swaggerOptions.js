const swaggerDefinition = require('./swaggerdefinition');

const swaggerOptions = {
    swaggerDefinition,
    apis: ['./router/*.js'], 
};

module.exports = swaggerOptions;
