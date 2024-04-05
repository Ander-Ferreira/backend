const express = require('express')
const app = express()

//middlewares
app.use(express.json())

//rotas
const produtos = require('./router/produtos')
app.use(produtos)

app.listen(3000, ()=>{
    console.log('aplicação rodando em http://localhost:3000')
})


