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

//Buscar todos os produtos
router.get('/produtos', (req, res)=>{
    res.status(200).json(listaProdutos)
})

//Buscar produto em específico
router.get('/produtos/:id', (req, res)=>{
    const id = req.params.id
    const produto = listaProdutos.find(produto => produto.id == id)
    if(produto){
        res.status(200).json(produto)
    } 
    else{
        res.status(404).json({mensagem:"Produto não encontrado!"})
    }


})

//cadastrar

router.post('/produtos', (req, res)=>{
    const dados = req.body
    
    if(!dados.nome || !dados.preco){
        res.status(400).json({mensagem:"nome e preços são obrigatórios!"})
    }
    else{
        const produto = {
            id: Math.round(Math.random() * 1000), //Math.round() arredonda o número e Math.random vai me dar um id aleatório
            nome: dados.nome,
            preco: dados.preco
        
                
        }
    listaProdutos.push(produto)
    res.status(201).json(
        {mensagem:"produto cadastrado com sucesso!", produto }
    )
        
    }

})


//Alterando
router.put('/produtos/:id', (req, res) => {
    const id = req.params.id
    const novosDados = req.body

    if (!novosDados.nome || !novosDados.preco) {
        res.status(400).json({ mensagem: "Nome e preço são obrigatórios!" })
    } else {

        const index = listaProdutos.findIndex(produto => produto.id == id)
        if (index == -1) { //me dirá se o produto está na lista
            res.status(404).json({ mensagem: "Produto não encotrado!" })
        } else {
            const produto = {
                id: Number(id),
                nome: novosDados.nome,
                preco: novosDados.preco
            }

            listaProdutos[index] = produto

            res.status(200).json(
                {
                    mensagem: "Produto alterado com sucesso!",
                    produto
                }
            )
        }
    }
})

//Delete
router.delete('/produtos/:id', (req, res)=>{
    const id = req.params.id
    const index = listaProdutos.findIndex(produtos => produtos.id == id)
    
    if(index == -1){
        res.status(404).json({mensagem: "Produto não encontrado!"})

    }
    else{
        listaProdutos.splice(index, 1)
        res.status(200).json({mensagem:"produto excluído com sucesso!"})
    }
})













module.exports = router