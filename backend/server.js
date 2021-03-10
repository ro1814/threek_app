import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
// import retos from './data/retos.js'


dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
    res.send('API is running...')
})


// app.get('/api/retos', (req, res) => {
//     res.json(retos)
// })

// app.get('/api/retos/:id', (req, res) => {
//     const reto = retos.find(r => r._id === req.params.id)
//     res.json(reto)
// })

const PORT = process.env.PORT || 5000

app.listen(PORT , console.log(`Server running in ${process.env.NODE_ENV} port ${PORT}`.yellow.bold))
