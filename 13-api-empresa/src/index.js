const express = require('express')
const app = express()
const porta = 3000

//Middlewares
app.use(express.json())

//Importação da conexão do banco de dados 
const DBconnection = require('./db/connection')
DBconnection()

<<<<<<< HEAD

//Importações de rotas de autenticações
const autenticacaoROUTER = require('./routes/autenticacao.routes')
app.use(autenticacaoROUTER)


//Checar token
const {checarTOKEN} = require('./validators/autenticacaoValidator')


//Importação de nossas rotas
const router = require('./routes/routes')
app.use('/', checarTOKEN, router)
=======
//Importação de rotas de autenticação
const autenticacaoRoutes = require('./routes/autenticacao.routes')
app.use(autenticacaoRoutes)
>>>>>>> 21d003b57a51d15eb5f543a2d842808df2317d80



//Importação de nossas rotas e Checagem
const router = require('./routes/routes')
const {checarTOKEN} = require('./validators/autenticacaoValidator')
app.use(router) //preciso colocar checarTOKEN, routes    o checar Token vai checar se o usuário está logado



app.listen(porta, ()=>{
    console.log('Aplicação rodando na porta', porta)
})

<<<<<<< HEAD
//Bibliotecas usadas neste projeto:
//npm install express nodemon  dotenv mongoose jsonwebtoken bcrypt
=======
//npm install jsonwebtoken bcrypt

>>>>>>> 21d003b57a51d15eb5f543a2d842808df2317d80

