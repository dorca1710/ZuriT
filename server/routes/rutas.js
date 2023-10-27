import express from 'express';
const router = express.Router();

// Importar el modelo de usuario
import Usuario from '../models/usuario';


// Agregar un usuario
router.post('/nuevo-usuario', async (req, res) => {
    const body = req.body;
    try {
    const usuarioDB = await Usuario.create(body);
    res.status(200).json(usuarioDB);
    } catch (error) {
    return res.status(500).json({
        mensaje: 'Ocurrió un error',
        error
    });
    }
});

// Obtener un usuario por su ID
router.get('/usuario/:id', async (req, res) => {
    const _id = req.params.id;
    try {
    const usuarioDB = await Usuario.findOne({ _id });
    if (!usuarioDB) {
        return res.status(404).json({
        mensaje: 'Usuario no encontrado'
        });
    }
    res.json(usuarioDB);
    } catch (error) {
    return res.status(400).json({
        mensaje: 'Ocurrió un error',
        error
    });
    }
});

  // Obtener todos los usuarios
    router.get('/usuario', async (req, res) => {
    try {
        const usuariosDB = await Usuario.find();
        res.json(usuariosDB);
    } catch (error) {
        return res.status(400).json({
        mensaje: 'Ocurrió un error',
        error
        });
    }
    });
    


    // Actualizar un usuario
router.put('/usuario/:id', async (req, res) => {
    const _id = req.params.id;
    const newData = req.body; // Datos actualizados

    try {
    const usuarioDB = await Usuario.findByIdAndUpdate(_id, newData, { new: true });

    if (!usuarioDB) {
        return res.status(404).json({
        mensaje: 'No se encontró el usuario con el ID indicado'
        });
        }

        res.json(usuarioDB);
    } catch (error) {
        return res.status(400).json({
        mensaje: 'Ocurrió un error',
        error
        });
    }
    });

    // Eliminar un usuario
router.delete('/usuario/:id', async (req, res) => {
    const _id = req.params.id;

    try {
    const usuarioDB = await Usuario.findByIdAndRemove(_id);

    if (!usuarioDB) {
        return res.status(404).json({
        mensaje: 'No se encontró el usuario con el ID indicado'
        });
    }

    res.json({
        mensaje: 'Usuario eliminado correctamente',
        usuario: usuarioDB
    });
    } catch (error) {
    return res.status(400).json({
        mensaje: 'Ocurrió un error',
        error
        });
    }
    });

module.exports = router;