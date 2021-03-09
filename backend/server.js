// import express from 'express'
// import dotenv from 'dotenv'
// import connectDB from './config/db.js'
const express = require('express')


// dotenv.config()

// connectDB()

const app = express()

app.get('/', (req, res) => {
    res.send('API is running...')
})


app.get('/api/retos', (req, res) => {
    res.json(retos)
})

app.get('/api/retos/:id', (req, res) => {
    const reto = retos.find(r => r._id === req.params.id)
    res.json(reto)
})

app.listen(5000, console.log('Server running on port 5000'))
