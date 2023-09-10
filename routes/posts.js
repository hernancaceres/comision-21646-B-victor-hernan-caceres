const express = require('express');
const router = express.Router();

//obtener todos los posts
router.get("/",(req, res) => {
    res.send("todos los artículos")
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
