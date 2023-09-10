const express = require("express");

const middlewares = require('./middlewares');

const postsRouter = require('./routes/posts');

const app = express();

app.use('/routes/posts', postsRouter);


//middlewares para manejar páginas de error 404
app.use(middlewares.notFound);
//middlewares para manejar errores de la aplicación 
app.use(middlewares.errorHandler);

app.listen(3000, () => {
    console.log("SERVER corriendo en: http://localhost:3000");
});