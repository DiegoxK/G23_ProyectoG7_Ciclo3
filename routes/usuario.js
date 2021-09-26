import express from 'express';
const router = express.Router();

import usuario from '../models/usuario';

//Agregar un usuario

router.post('/new-user', async (req, res) => {

    const body = req.body;

    try {
        const usuarioDB = await usuario.create(body);
        res.status(200).json(usuarioDB);
    } catch (error) {

        return res.status(500).jason({
            mensaje: 'Ocurrió un error',
            err
        })

    }
});

// Get con todos los registros
router.get('/usuario', async (req, res) => {
    try {
        const usuarioDB = await usuario.find();
        res.json(usuarioDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            err
        })
    }
});

// Delete eliminar un usuario
router.delete('/usuario/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const usuarioDB = await nota.findByIdAndDelete({ _id });
        if (!usuarioDB) {
            return res.status(400).json({
                mensaje: 'No se encontró el id indicado',
                err
            })
        } res.json(usuarioDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            err
        })
    }
});

// Put actualizar un usuario
router.put('/usuario/:id', async (req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
        const usuarioDB = await nota.findByIdAndUpdate(
            _id,
            body,
            { new: true });
        res.json(usuarioDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            err
        })
    }
});
// Exportamos la configuración de express app
module.exports = router;