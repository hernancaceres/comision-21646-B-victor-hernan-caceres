require('dotenv').config();

const path=require("node:path")
const express = require("express");
const cors = require("cors");
const db = require("./db/database");
const middlewares = require('./middlewares');
const postsRouter = require('./routes/posts');

const app = express();

//INVOCAMOS AL MOTOR DE PLANTILLAS
app.set("view engine","ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
//conexion y autenticacion

(async () => {
    try {
        await db.authenticate(),
            await db.sync();
        console.log("CONEXION A LA BASE DE DATOS OK");
    } catch (error) {
        throw new Error(error)
    }
})()

//middlewares 
app.use(express.json()); // para recibir información
app.use(cors());//para habilitar otras aplicaciones para realizar solicitudes
app.use('/', postsRouter);//para traer las rutas
app.use(middlewares.notFound);//para manejar páginas de error 404
app.use(middlewares.errorHandler);//para manejar errores de la aplicación 

app.listen(3000, () => {
    console.log("SERVER corriendo en: http://localhost:3000");
});