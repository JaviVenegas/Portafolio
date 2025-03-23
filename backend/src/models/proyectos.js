 const {DB} = require('../config/db');

 const getProyectos = async (limit = 6) => {
    try {
        const SQLQuerry =
        `SELECT p.*, i.imagen_url 
        FROM proyectos p
        LEFT JOIN imagenes i ON p.id = i.proyecto_id
        LIMIT $1`;

    } catch (error) {
        throw error;
    }
}


module.exports = {
    getProyectos
}