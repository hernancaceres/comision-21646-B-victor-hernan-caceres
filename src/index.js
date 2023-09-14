require('dotenv').config();

const path=require("node:path")
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
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
app.use(
    helmet.contentSecurityPolicy({
      directives: {
        defaultSrc: ["'self'"], // Permitir cargas desde el mismo dominio (self)
        imgSrc: ["'self'", '*'], // Permitir imágenes desde el mismo dominio y todos los dominios
        //imgSrc: ["'self'", 'https://empresas.blogthinkbig.com'], // Permitir imágenes desde el mismo dominio y el dominio externo
        scriptSrc: ["'self'", 'https://cdn.jsdelivr.net'], // Permitir scripts desde el mismo dominio y el dominio de CDN
      },
    })
  );//previene ataques de inyección de contenido, como ataques de scripting entre sitios (XSS).
app.use(morgan("tiny"));//retorna el método, la ruta, el tiempo para completar la petición y código http de respuesta
app.use('/', postsRouter);//para traer las rutas

app.use(middlewares.notFound);//para manejar páginas de error 404
app.use(middlewares.errorHandler);//para manejar errores de la aplicación 

const port = 3001
app.listen(3001, () => {
    console.log("SERVER corriendo en: http://localhost:3001");
});