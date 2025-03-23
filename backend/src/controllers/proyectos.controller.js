const proyectos = require('../models/proyectos.model');
const {DB} = require('../config/db');

const handleGetProyectos = async (req, res, next) => {
    try {
        const { limit } = req.query;
        const proyectos = await plantas.getProyectos (limit);
        
        if (!proyectos){
            throw new Error('No se encontraron proyectos');
        }

        res.json ({
            message: 'Proyectos obtenidos',
            projects: proyectos,
        }
        )
    } catch (error) {
        next(error);
    }
}

module.exports = {
    handleGetProyectos
}