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

// @desc Create a Reto
// @route POST /api/retos
// @access Public Route
const createReto = asyncHandler(async (req, res) =>{
   

    const reto = new Reto ({
        
        creador: 'Ejemplo',
        deporte: 'Ejemplo',
        causa: 'Ejemplo',
        titulo: 'Ejemplo',
        desc: 'Ejemplo',
        fechaInicio: 'Ejemplo',
        objetivoRec: 0,
        recaudado: 0,
        imagen: '/images/runningMadrid.webp',
        videoURL: 'Ejemplo',
        socialMedia: 'Ejemplo1',
        user: req.user_id,
        
    })

    const createdReto = await reto.save()
    res.status(201).json(createdReto)
})

// @desc UPDATE recaudado at Reto
// @route PUT /api/retos
// @access Private/User

const updateReto = asyncHandler(async (req, res) => {
    
   const  { recaudado }  = req.body
    const reto = await Reto.findById(req.params.id)

    if(reto){

        reto.recaudado = recaudado

        const updatedReto = await reto.save()
        res.json(updatedReto)

    } else {
        res.status(404)
        throw new Error ('Reto no encontrado')
    }
    
})


export {
    getRetos,
    getRetoById,
    createReto,
    updateReto
}
