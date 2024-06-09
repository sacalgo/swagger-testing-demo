
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Swagger Doc',
      version: '1.0.0',
      description: 'A description of your API',
    },
    servers: [
      {
        url: 'http://localhost:5000/',
        description: 'Swagger API testing',
      },
    ],
  },
  apis: ['./routes/*.js'], 
};

console.log('Swagger Options:', options); 

try {
    const specs = swaggerJSDoc(options);
    console.log('Swagger Specs:', specs); 
    module.exports = specs;
  } catch (error) {
    console.error('Error swagger specs:', error); 
    throw error; 
  }