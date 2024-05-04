require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 3000

//Pegando dados dos meus envs

const DB_USERNAME = process.env.DB_USERNAME
const DB_PASSWORD = process.env.DB_PASSWORD

//Conectando ao meu banco de dados

mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@minhaapi.jflvfeo.mongodb.net/?retryWrites=true&w=majority&appName=Minhaapi`)
.then(()=>{
    console.log('Conectado ao banco de dados')
})
.catch((err)=>{
    console.log('Erro ao conectar banco de dados!')
})

//Middlewares
app.use(express.json())

//Modelo
const Pessoas = mongoose.model('pessoas', {nome:String})


//Minha lógica

//Buscar tudo
app.get('/pessoas', async(req, res)=>{
    const pessoas = await Pessoas.find({})
    res.json(pessoas)
})

//Buscar por id
app.get('/pessoas/:id', async (req, res)=>{
    const procurarPessoas = await Pessoas.findById(req.params.id)
    res.json(procurarPessoas)

})

//Cadastrar
app.post('/pessoas', async (req, res)=>{
    const cadastrar = req.body
    const novaPessoa = new Pessoas({nome: req.body.nome})
    await novaPessoa.save()
    res.json(novaPessoa)
})

//Atualizar
app.put('/pessoas/:id', async (req, res)=>{
    const procurarCadastrar = await Pessoas.findByIdAndUpdate(req.params.id, {nome: req.body.nome})
    res.json(procurarCadastrar)
})

//Deletar
app.delete('/pessoas/:id', async (req, res)=>{
    const procurarDeletar = await Pessoas.findByIdAndDelete(req.params.id)
    res.json('Pessoas excluída com sucesso')
})

app.listen(port, ()=>{
    console.log('Aplicação conectada à', port)
})