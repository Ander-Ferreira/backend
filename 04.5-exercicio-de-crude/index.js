const express = require('express')
const app = express()

//importações
const alunos = require('./routes/alunos')

//middleware
app.use(express.json())

//ROTAS
app.use(alunos)


//lógica
app.get('/', (req, res)=>{
    res.send('Deu certo')
})


app.listen(3000, ()=>{
   console.log('Aplicação rodando em http://localhost:3000') 
   
})