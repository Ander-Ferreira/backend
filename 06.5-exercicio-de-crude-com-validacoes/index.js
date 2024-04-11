const express = require('express')
const app = express()

//middleware
app.use(express.json())

//Rotas
const lista = require('./router/lista')
app.use(lista)







app.listen(3000, ()=>{
    console.log('aplicação rodando na porta http://localhost:3000')
})