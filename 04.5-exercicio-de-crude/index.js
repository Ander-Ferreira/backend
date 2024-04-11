const express = require('express')
const app = express()

//importações
const tarefas = require('./routes/tarefas')

//middleware
app.use(express.json())

//ROTAS
app.use(tarefas)


//lógica
app.get('/', (req, res)=>{
    res.send('Deu certo')
})


app.listen(3000, ()=>{
   console.log('Aplicação rodando em http://localhost:3000') 
   
})