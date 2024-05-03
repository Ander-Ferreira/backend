const express = require('express')
const app = express()
const PORT = 3000
const mongoose = require('mongoose')
require('dotenv').config() //busca as variáveis do env

//Conexão com o mongoDB
//console.log(process.env.DB_USERNAME)

const DB_USERNAME = process.env.DB_USERNAME
const DB_PASSWORD = process.env.DB_PASSWORD

mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@minhaapi.jflvfeo.mongodb.net/?retryWrites=true&w=majority&appName=Minhaapi`)
    .then(()=>{
        console.log('conectado ao banco mongo')
    
    })

    .catch((err) => console.log('Erro ao contectar no meu MongoDB', err))

//Middlewares
app.use(express.json())

//Modelos
const Tarefa = mongoose.model('tarefa', {nome: String})


//Rotas

app.get('/', (req, res)=>{
    res.json('Hello')
})

app.get('/tarefas', (req, res)=>{
    const tarefas = Tarefa.find({})
})

app.post('/tarefas', async (req, res)=>{
    const body = req.body
    const tarefa = new Tarefa({nome: req.body.nome})
   await tarefa.save()
   res.json(tarefa)
    
})


app.listen(PORT, ()=>{
    console.log('Aplicação rodando na porta', PORT)
})