const swaggerDefinition = require('./swaggerdefinition');

const swaggerOptions = {
    swaggerDefinition,
    apis: ['./routes/*.js'], 
};

module.exports = swaggerOptions;
