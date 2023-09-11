const {Sequelize} = require("sequelize");

//definimos los parámetros de conexion
const db = new Sequelize(process.env.DB_USERNAME, process.env.DB_NAME, process.env.DB_PASS, {
    host: "localhost",
    dialect: "mysql"
});

module.exports = db;