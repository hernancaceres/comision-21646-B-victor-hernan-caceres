const { DataTypes, DATE } = require("sequelize");
const db = require("../db/database");


//definimos el modelo
const Post =  db.define("Posts", {
    titulo: { type: DataTypes.STRING, unique: true },
    contenido: { type: DataTypes.STRING },
    imagen: { type: DataTypes.STRING },
    fecha: { type: DATE, defaultValue: DATE.now },
});

module.exports = Post;