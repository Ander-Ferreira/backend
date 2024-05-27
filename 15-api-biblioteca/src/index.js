const express = require('express')
const app = express()
const porta = 3000

//Middleware
app.use(express.json())

//Importação do banco de dados

const DBconnection = require('./db/connection')
DBconnection()

//Importação das minhas rotas de autenticação (deixe isso sempre para o final)
const autenticacaoROUTER = require('./routes/autenticacao.routes')
app.use(autenticacaoROUTER)

//Importação da minha função de checagem de token

const {checarTOKEN} = require('./validators/autenticacaoValidators')



//Importação das minhas rotas
const routes = require('./routes/routes')
app.use('/', checarTOKEN, routes)


app.listen(porta, ()=>{
    console.log('Aplicação rodando na porta', porta)
})