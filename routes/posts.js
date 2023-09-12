const express = require('express');
const Post = require('../models/Post');
const router = express.Router();

//obtener todos los posts
router.get("/", async (req, res) => {

    try {
        const article = await Post.findAll();
        if (!article) return res.status(404)
        //return res.status(200).json(article)
        res.render('index', { article }); // Renderiza la vista "index.ejs" y pasa datos como "articles"


    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Error Server'
        })
    }


});



//crear post

// Ruta para mostrar el formulario de creación y manejar la creación del post
router.route("/create")
    .get((req, res) => {
        res.render('create'); // Renderiza la vista "create.ejs" para mostrar el formulario
    })
    .post(async (req, res) => {
        console.log(req.body)
        try {
            const article = await Post.create({
                titulo: req.body.titulo,
                contenido: req.body.contenido,
                imagen: req.body.imagen,
            });
            // Redirige al usuario a una página de éxito o a donde desees después de crear el post
            res.redirect('/create'); // Puedes redirigirlo nuevamente a la página de creación o a otra vista
        } catch (error) {
            console.error(error)
            return res.status(500).json({
                message: 'Error Server'
            });
        }
    });


/*router.post("/create", async (req, res) => {

    try {
        const article = await Post.create({
            titulo: req.body.titulo,
            contenido: req.body.contenido,
            imagen: req.body.imagen,
        });
        //const article = await Post.create(req.body);
        //return res.status(201).json(article)
        res.render('create'); // Renderiza la vista "create.ejs"
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Error Server'
        })
    }
});*/

// Para renderizar la vista "create.ejs" en la ruta '/create'
router.get("/edit", (req, res) => {
    res.render('edit'); // Renderiza la vista "create.ejs"
});

//editar post
// Editar post (mostrar formulario de edición)
router.get("/edit/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const article = await Post.findByPk(id);
        if (!article) {
            return res.status(404).json({
                message: 'Post no encontrado'
            });
        }

        res.render('edit', { article }); // Renderiza la vista "edit.ejs" y pasa el artículo a editar
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error Server'
        });
    }
});

// Actualizar post (manejar el formulario de edición)
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const article = await Post.findByPk(id);
        if (!article) {
            return res.status(404).json({
                message: 'Post no encontrado'
            });
        }

        // Actualiza los datos del post con los valores del formulario
        article.update(req.body);

        // Redirige al usuario a la página de detalles del post u otra vista apropiada
        res.redirect(`/${id}`);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error Server'
        });
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
