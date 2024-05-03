require('dotenv').config()
const mongoose = require('mongoose')


const express = require('express')
const app = express()

app.use(express.json())

app.get('/hello', (req, res)=>{
    res.json('Hello')
})

const DB_USERNAME = process.env.DB_USERNAME
const DB_PASSWORD = process.env.DB_PASSWORD



mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@minhaapi.jflvfeo.mongodb.net/?retryWrites=true&w=majority&appName=Minhaapi`)
   .then(()=>{
    console.log('Conectado ao mongoDB')
   })
   
   .catch(err => console.log('Erro ao contectar no meu MongoDB', err))


app.listen(3000, ()=>{
    console.log('Api rodando em http://localhost:3000')
})

