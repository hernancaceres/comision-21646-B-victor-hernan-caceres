const express = require('express');
const Post = require('../models/Post');
const router = express.Router();

//obtener todos los posts
router.get("/", async (req, res) => {
    res.send("todos los artículos")

    const posts = await Post.findAll();
    res.json(posts);
});

//crear post
router.post("/",(req, res) => {
    res.send("crear artículo")
});

//editar post
router.put("/",(req, res) => {
    res.send("editar artículo")
});

//eliminar post
router.delete("/",(req, res) => {
    res.send("eliminar artículo")
});

module.exports = router;
