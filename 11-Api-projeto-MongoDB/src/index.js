const express = require('express')
const app = express()
const PORT = 3000
const mongoose = require('mongoose')
require('dotenv').config() //busca as variáveis do env

//Conectar primeiro, depois criamos o modelo, e depois fazemos as operações de salvar, buscar e excluir

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

app.get('/tarefas', async (req, res)=>{
    const tarefa =  await Tarefa.find({})
    res.json(tarefa)
})



app.get('/tarefas/:id', async (req, res)=>{
    const tarefa = await Tarefa.findById(req.params.id)
    res.json(tarefa)
})

app.post('/tarefas', async (req, res)=>{
    const body = req.body
    const tarefa = new Tarefa({nome: req.body.nome})
   await tarefa.save()
   res.json(tarefa)
    
})


app.put('/tarefas/:id', async (req, res)=>{
    const tarefa = await Tarefa.findByIdAndUpdate(req.params.id, {nome: req.body.nome})
    res.json(tarefa)
})

app.delete('/tarefas/:id', async (req, res)=>{
    await Tarefa.findByIdAndDelete(req.params.id)
    res.json()
})


app.listen(PORT, ()=>{
    console.log('Aplicação rodando na porta', PORT)
})