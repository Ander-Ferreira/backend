const express = require('express')
const app = express()
const porta = 3000

//Middlewares
app.use(express.json())

//Importação da conexão do banco de dados 
const DBconnection = require('./db/connection')
DBconnection()


//Importações de rotas de autenticações
const autenticacaoROUTER = require('./routes/autenticacao.routes')
app.use(autenticacaoROUTER)


//Checar token
const {checarTOKEN} = require('./validators/autenticacaoValidator')


//Importação de nossas rotas
const router = require('./routes/routes')
app.use('/', checarTOKEN, router)




app.listen(porta, ()=>{
    console.log('Aplicação rodando na porta', porta)
})

//Bibliotecas usadas neste projeto:
//npm install express nodemon  dotenv mongoose jsonwebtoken bcrypt nodemailer yup
//diagram.net, whimiscal.com, draw.io


