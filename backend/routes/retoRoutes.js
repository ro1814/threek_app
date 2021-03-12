import express from 'express'
const router = express.Router()
import { getRetoById, getRetos } from '../controllers/retoController.js'


router.route('/').get(getRetos)
router.route('/:id').get(getRetoById)


export default router