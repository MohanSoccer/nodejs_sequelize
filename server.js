const express = require('express');
const app = express();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const apiErrorHandler = require('./response/api.error.handler');
const student = require('./src/controller/student/student.controller');

const PORT = 3500;

const swaggerOptions = {
    swaggerDefinition: {
        info : {
            title :   'Library api',
            version: '1.0.0'
        }
    },
    apis: ['./src/controller/student/student.controller.js']
}

app.use(express.json())

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocs))

app.use('/student',student)

app.get('/',(req,res) => {
    res.json("API Running");
})

app.use(apiErrorHandler);






app.listen(PORT, (err) => {
    if (!err) {
        console.log("Server started on " + PORT);
    }
})