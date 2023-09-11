require('dotenv').config();

const express = require("express");
const cors = require("cors");
const middlewares = require('./middlewares');

const postsRouter = require('./routes/posts');

const app = express();

//middlewares para recibir información
app.use(express.json());
//middlewares para habilitar otras aplicaciones para realizar solicitudes
app.use(cors());
//middlewares para traer las rutas
app.use('/', postsRouter);
//middlewares para manejar páginas de error 404
app.use(middlewares.notFound);
//middlewares para manejar errores de la aplicación 
app.use(middlewares.errorHandler);

app.listen(3000, () => {
    console.log("SERVER corriendo en: http://localhost:3000");
});