const express = require('express')
const app = express()

//middleware
app.use(express.json())

//rotas
const compras = require('./router/compras')
app.use(compras)



app.listen(3000, ()=>{
    console.log('App rodando em http://localhost:3000')
})