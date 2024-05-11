const express = require('express')
const app = express()
const port = 3000

//Middlewares
app.use(express.json())

//Após feita as configurações de conexões no arquivo de conexões (connection) da pasta DB
//Importamos com uma const

const DBconnection = require('./db/connection')

//Agora basta chamar como uma função

DBconnection()


//Após feitas as rotas no arquivo de routes, importamos
const routes= require('./routes/routes')

//Agora usaremos as rotas
app.use(routes)







app.listen(3000, ()=>{
    console.log('Aplicação conectada à porta', port)
})











