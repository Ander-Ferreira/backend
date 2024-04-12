const express = require('express')
const app = express()

//middleware
app.use(express.json())

//rotas
const carros = require('./router/carros')
app.use(carros)


//saída
app.listen(3000, ()=>{
    console.log('Aplicação rodando em http://localhost:3000')
})