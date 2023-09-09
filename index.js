const express = require("express");
const app = express();

//obtener todos los posts
app.get("/posts",(req, res) => {
    res.send("todos los posts")
});

//crear post
app.get("/crear/post",(req, res) => {
    res.send("crear post")
});

app.listen(3000, () => {
    console.log("SERVER corriendo en: http://localhost:3000");
});