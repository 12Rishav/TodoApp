const components = require('./swaggerComponents');


const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Todo app',
        version: '1.0.0',
        description: 'Api documentation for todo app',
    },
    servers: [
        {
            url: 'http://localhost:5030',
            description: 'Local server',
        },
    ],
    components,
};

module.exports = swaggerDefinition;
