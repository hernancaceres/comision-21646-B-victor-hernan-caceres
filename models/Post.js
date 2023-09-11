const { DataTypes, DATE } = require("sequelize");
const db = require("../db/database");


//definimos el modelo
const Post =  db.define("Posts", {
    titulo: { type: DataTypes.STRING,},
    contenido: { type: DataTypes.STRING },
    imagen: { type: DataTypes.STRING },
    
});

module.exports = Post;