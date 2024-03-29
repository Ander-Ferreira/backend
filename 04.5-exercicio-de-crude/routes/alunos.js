const express = require('express')
const router = express.Router()

//Dados mockados, array

let listaAlunos = ["Joaquina", "Marilana", "Biruleibe", "Zé da Manga"]

//CRUD

router.get('/alunos', (req, res)=>{
    res.json(listaAlunos)

})

router.get('/alunos/:id', (req, res)=>{
    const id = req.params.id
    const alunos = listaAlunos[id]
    res.send(alunos)

})

router.post('/alunos', (req, res)=>{
    const alunos = req.body
    listaAlunos.push(alunos.nome)
    res.status(201).json({mensagem: "Animal posto na jaula com sucesso!" } )
    


})

router.delete('/alunos/:id', (req, res)=>{
    const id = req.params.id
    listaAlunos.splice(id, 1) //nota para o futuro, .splice() altera o conteúdo de uma lista enquanto remove o antigo
    res.json({mensagem: "Removido da jaula!"})
})

router.put('/alunos/:id', (req, res)=>{
    const id = req.params.id
    const alunos = req.body
    listaAlunos[id] = alunos.nome
    res.json({mensagem: "Animal atualizado com sucesso!"})
})







//exportar
module.exports = router