const express = require('express')
const app = express()
const porta = 3000

//Middlewares
app.use(express.json())

//Importações

//Importação da conexão do banco de dados 
const DBconnection = require('./db/connection')
DBconnection()

//Importação de rotas de autenticação
const autenticacaoRoutes = require('./routes/autenticacao.routes')
app.use(autenticacaoRoutes)



//Importação de nossas rotas e Checagem
const router = require('./routes/routes')
const {checarTOKEN} = require('./validators/autenticacaoValidator')
app.use(router) //preciso colocar checarTOKEN, routes    o checar Token vai checar se o usuário está logado



app.listen(porta, ()=>{
    console.log('Aplicação rodando na porta', porta)
})

//npm install jsonwebtoken bcrypt


