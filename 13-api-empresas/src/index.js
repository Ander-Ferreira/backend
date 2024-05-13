const express = require('express')
const app = express()
const PORTA = 3000

//Importamos as configurações do nosso banco de dados
const DBconfig = require('./db/connection')
DBconfig()

//APP.USE(EXPRESS.JSON()) VEM PRIMEIRO QUE A ROTA!
app.use(express.json())

const routes = require('./routes/routes')

app.use(routes)








app.listen(PORTA, ()=>{
    console.log('Aplicação rodando na porta', PORTA)
})
