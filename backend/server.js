import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

import retoRoutes from './routes/retoRoutes.js'
import userRoutes from './routes/userRoutes.js'
import bodyParser from 'body-parser'


dotenv.config()

connectDB()

const app = express()

//Allows us to accept json data in the body
app.use(express.json())
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send('API is running...')
})

app.use('/api/retos', retoRoutes)
app.use('/api/users', userRoutes)

//Middlewares
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT , console.log(`Server running in ${process.env.NODE_ENV} port ${PORT}`.yellow.bold))
