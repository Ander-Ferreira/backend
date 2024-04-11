const express = require('express')
const router = express.Router()

//Dados mockados, array

let listatarefas = []

//CRUD

router.get('/tarefas', (req, res)=>{
    res.json(listatarefas)

})

router.get('/tarefas/:id', (req, res)=>{
    const id = req.params.id
    const tarefas = listatarefas[id]
    res.send(tarefas)

})

router.post('/tarefas', (req, res)=>{
    const tarefas = req.body
    listatarefas.push(tarefas.nome)
    res.status(201).json({mensagem: "Tarefa cadastrada com sucesso!" } )
    


})

router.delete('/tarefas/:id', (req, res)=>{
    const id = req.params.id
    listatarefas.splice(id, 1) //nota para o futuro, .splice() altera o conteúdo de uma lista enquanto remove o antigo
    res.json({mensagem: "Tarefa Removida!"})
})

router.put('/tarefas/:id', (req, res)=>{
    const id = req.params.id
    const tarefas = req.body
    listatarefas[id] = tarefas.nome
    res.json({mensagem: "Tarefa atualizada com sucesso!"})
})







//exportar
module.exports = router