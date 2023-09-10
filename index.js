const express = require("express");

const middlewares = require('./middlewares');

const app = express();

//obtener todos los posts
app.get("/",(req, res) => {
    res.send("todos los artículos")
});

//crear post
app.post("/",(req, res) => {
    res.send("crear artículo")
});

//middlewares para páginas de error 404
app.use(middlewares.notFound);

app.listen(3000, () => {
    console.log("SERVER corriendo en: http://localhost:3000");
});