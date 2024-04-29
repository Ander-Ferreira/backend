const express = require('express')
const app = express()
const router = express.Router()

//Minha lógica

listaPessoas = [
    {
        id: 1,
        nome: "Astolfo",
        idade: 35,
        email: "astolfo@gmail.com",
        telefone: 6139658975
    }
]



//Middlewares
function validarId(req, res, next) {
    const id = req.params.id
    const index = listaPessoas.find(index => index.id == id)

    if (index) {
        req.index = index
        next()
    }
    else {
        return res.status(404).json({ mensagem: "pessoa não encontrada!" })
    }


}

function validarAtributos(req, res, next) {
    const pessoa = req.body
    if (!pessoa.nome || !pessoa.idade || !pessoa.email || !pessoa.telefone) {
        res.status(400).json({ mensagem: "Nome, idade, email e telefone são obrigatórios!" })
    }
    next()



}


//Buscar tudo

router.get('/lista', (req, res) => {
    res.status(200).json(listaPessoas)
})

//buscando com Id com validações

router.get('/lista/:id', validarId, (req, res) => {
    res.json(req.index)

})

//cadastrando
router.post('/lista', validarAtributos, (req, res) => {
    const pessoa = req.body
    const cadastrar = {
        id: listaPessoas.length + 1,
        nome: pessoa.nome,
        idade: pessoa.idade,
        email: pessoa.email,
        telefone: pessoa.telefone
    }

    listaPessoas.push(cadastrar)
    res.status(201).json({ mensagem: "pessoa cadastrada com sucesso!", cadastrar })




})

//deletando
router.delete('/lista/:id', validarId, (req, res) => {
    const id = req.params.id
    const index = listaPessoas.findIndex(pessoa => pessoa.id == id)
    if (index == -1) {
        res.status(404).json({ mensagem: "pessoa não encontrada!" })
    }
    else {
        listaPessoas.splice(index, 1)
        res.status(200).json({ mensagem: "pessoa excluída com sucesso!" })
    }
})

//atualizando

router.put('/lista/:id', validarAtributos, validarId, (req, res) => {
    const id = req.params.id
    const atualizar = req.body
     
    const index = listaPessoas.findIndex(index => index.id == id)

    const novaPessoa = {
        id: id,
        nome: atualizar.nome,
        idade: atualizar.idade,
        email: atualizar.email,
        telefone: atualizar.telefone
    }
    listaPessoas[index] = novaPessoa
    res.status(200).json({ mensagem: "pessoa atualizada com sucesso!", novaPessoa })




})















module.exports = router