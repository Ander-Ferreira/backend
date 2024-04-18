const express = require('express')
const app = express()

//middleware
app.use(express.json())

//rotas
const provas = require('./router/prova')
app.use(provas)






app.listen(3000, ()=>{
    console.log('Servidor rodando na porta http://localhost:3000')
})