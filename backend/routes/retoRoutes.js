import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Reto from '../models/retoModel.js'


// @desc Fetch all Retos
// @route GET /api/retos
// @access Public Route

router.get('/', asyncHandler(async (req, res) => {
    const retos =  await Reto.find({})
    res.json(retos)
}))

// @desc Fetch a single Reto
// @route GET /api/reto
// @access Public Route

router.get('/:id', asyncHandler(async (req, res) => {
    const reto = await Reto.findById(req.params.id)

    if(reto){
        res.json(reto)
    } else {
        res.status(404)
        throw new Error('Reto no encontrado')
    }
    
}))

export default router