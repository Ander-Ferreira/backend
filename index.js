const express = require('express')
const app = express()

//middleware
app.use(express.json())


//rotas
const lista = require('./router/lista')
app.use(lista)


app.listen(3000, ()=>{
    console.log('Aplicação rodando na porta http://localhost:3000')
})