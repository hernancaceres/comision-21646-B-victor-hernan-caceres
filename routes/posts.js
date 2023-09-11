const express = require('express');
const Post = require('../models/Post');
const router = express.Router();

//obtener todos los posts
router.get("/", async (req, res) => {
    
    try {
        const article = await Post.findAll();
        if (!article) return res.status(404)
        return res.status(200).json(article)

    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Error Server'
        })
    }
    
   
});

//crear post
router.post("/", async (req, res) => {
    const { titulo, contenido, imagen} = req.body;

    if (!titulo || !contenido) {
        return res.status(400).json({
            error: "uno o mas campos vacios",
        });
    }

    const article = await Post.create({ titulo, contenido, imagen });
    res.json(article);
});

//editar post
router.put("/:id", async (req, res) => {

    const { id } = req.params
    try {
        const article = await Post.findByPk(id)

        if (!article) {
            return res.status(404).json({
                message: 'Post no encontrado'
            })
        }

        article.update(req.body)

        return res.status(200).json(article)
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Error Server'
        })
    }

});

//eliminar post
router.delete("/:id", async (req, res) => {

    const { id } = req.params
    try {
        const articleDeleted = await Post.destroy({
            where: {
                id: id
            }
        })
        if (!articleDeleted) {
            return res.status(404).json({
                message: 'Post no encontrado'
            })
        }
        return res.status(200).json({
            message: 'Post eliminado'
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Error Server'
        })
    }

});

module.exports = router;
