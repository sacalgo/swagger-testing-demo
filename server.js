const express = require('express'); 
const  apiRoutes = require('./routes/apiRoutes.js'); 
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./swagger');



const app = express(); 
app.use(express.json()); 

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs)); 

app.get('/', (req, res)=>{
    res.send("Hi there, Me calling from server baseURL"); 
}); 

app.use("/api", apiRoutes); 

const PORT = process.env.PORT || 5000; 

app.listen(PORT, (req, res)=>{
    console.log(`server is listening on PORT ${PORT}`); 
}); 