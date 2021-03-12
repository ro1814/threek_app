import asyncHandler from 'express-async-handler'
import Reto from '../models/retoModel.js'

// @desc Fetch all Retos
// @route GET /api/retos
// @access Public Route
const getRetos = asyncHandler(async(req, res) => {
    const retos =  await Reto.find({})

    res.json(retos)
})

// @desc Fetch a single Reto
// @route GET /api/reto/:id
// @access Public Route
const getRetoById = asyncHandler(async(req, res) => {
    const reto = await Reto.findById(req.params.id)

    if(reto){
        res.json(reto)
    } else {
        res.status(404)
        throw new Error('Reto no encontrado')
    }
})

export {
    getRetos,
    getRetoById
}