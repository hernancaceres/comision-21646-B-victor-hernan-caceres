const { DataTypes, DATE } = require("sequelize");
const db = require("../db/database");


//definimos el modelo
const Post =  db.define("Posts", {
    titulo: { type: DataTypes.STRING,allowNull: true},
    contenido: { type: DataTypes.STRING,allowNull: true },
    imagen: { type: DataTypes.STRING,allowNull: true },
    
});

module.exports = Post;