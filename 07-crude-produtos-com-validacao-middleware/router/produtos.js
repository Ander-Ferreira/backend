const express = require('express')
const app = express()
const router = express.Router()

//Lógica
let listaProdutos = [
    {
        id: 1,
        nome: "arroz",
        preco: 29.99
    }
]

//middlewares de validações
//validar se um produto existe
function validarProduto(req, res, next) {
    console.log('Passou no validar produto')
    const id = req.params.id
    const produto = listaProdutos.find(produto => produto.id == id)

    if (produto) {
        req.produto = produto
        next()
    } else {
        return res.status(404).json({ mensagem: "produto não encontrado!" })
    }
}

//Validar os atributos do corpo
function validarAtributos(req, res, next) {
    const dadosRecebidos = req.body

    if (!dadosRecebidos.nome || !dadosRecebidos.preco) {
        return res.status(400).json({ mensagem: "Nome e preço são obrigatórios" })
    } else {
        next()
    }
}

//Buscar todos os produtos
router.get('/produtos', (req, res) => {
    res.status(200).json(listaProdutos)
})

//Buscar produto em específico
router.get('/produtos/:id', validarProduto, (req, res) => {
    res.json(req.produto)
})

//cadastrar
router.post('/produtos', validarAtributos, (req, res) => {
    const dados = req.body
    listaProdutos.push(dados)
    res.status(201).json({ mensagem: "produto cadastrado com sucesso!", produto: dados })
})

//Alterando
router.put('/produtos/:id', validarAtributos, validarProduto, (req, res) => {
    const id = req.params.id
    const novosDados = req.body

    const index = listaProdutos.findIndex(produto => produto.id == id)

    const produto = {
        id: Number(id),
        nome: novosDados.nome,
        preco: novosDados.preco
    }
    listaProdutos[index] = produto
    res.status(200).json({ mensagem: "produto alterado com sucesso!", produto })
})

//Delete
router.delete('/produtos/:id', validarProduto, (req, res) => {
    const id = req.params.id
    const index = listaProdutos.findIndex(produtos => produtos.id == id)
    listaProdutos.splice(index, 1)
    res.status(200).json({ mensagem: "produto excluído com sucesso!" })
})

module.exports = router
