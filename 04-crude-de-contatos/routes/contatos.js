//importar express
const express = require('express')
//criando um router
const router = express.Router()

//dados mockados
//criar uma lista
let listaContatos = ["João", "Pedro", "Daniel"]


//CRUD
//READ BUSCAR TODOS OS CONTATOS
router.get('/contatos', (req, res)=>{

    res.json(listaContatos)
})



//READ - BUSCA DO CONTATO PELO IDENTIFICADOR
router.get('/contatos/:id', (req, res)=>{
    const id = req.params.id
    const contato = listaContatos[id]
    res.json(contato)
})


//CREATE = CADASTRAR UM CONTATO
router.post('/contatos', (req, res) =>{
    const contato = req.body
    listaContatos.push(contato.nome)
    res.status(201).json({ mensagem: "Contato Criado com Sucesso!" })
})


//DELETE - EXCLUIR CONTATO
router.delete('/contatos/:id', (req, res)=>{
    const id = req.params.id
    listaContatos.splice(id, 1)
    res.json({mensagem: "contato excluído com sucesso!"})
})

//UPDATE - ATUALIZAR CONTATO
router.put('/contatos/:id', (req, res)=>{
    const id = req.params.id
    const contato = req.body
    listaContatos[id] = contato.nome
    res.json({mensagem: "Atualizado com sucesso"})

})

//exportar o router
module.exports = router

