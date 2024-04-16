const express = require('express')
const app = express()

//middleware
app.use(express.json()) //sempre siga a ordem de precedência


//rotas - faz o roteamento para as rotas do CRUD  de carros
const carros = require('./router/carros')
app.use(carros)














app.listen(3000, ()=>{
    console.log("App rodando na portal http://localhost:3000")
})












