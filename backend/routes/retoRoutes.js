import express from 'express'
const router = express.Router()
import { getRetoById, getRetos, createReto, updateReto } from '../controllers/retoController.js'


router.route('/').get(getRetos).post(createReto)
router.route('/:id').get(getRetoById).put(updateReto)


export default router