const express = require('express')
const app = express()
const porta = 3000

//Middlewares
app.use(express.json())

//Importações

//Importação da conexão do banco de dados 
const DBconnection = require('./db/connection')
DBconnection()

//Importação de nossas rotas
const router = require('./routes/routes')
app.use(router)




app.listen(porta, ()=>{
    console.log('Aplicação rodando na porta', porta)
})

