const express = require('express')
const router = express.Router()



//lista comandos

let listaProdutos = [
   {
    id: 1,
    nome: "coca-cola",
    preco: 4.99
    },

    {
        id: 2,
        nome: 'batata frita',
        preco: 9.99
    },

    {
       id: 3,
       nome: 'arroz',
       preco: 29.99
    }
]

router.get('/produtos', (req, res)=>{
    res.json(listaProdutos)
    })



// Read -  buscar todos os produtos
router.get('/produtos', (req, res) => { 
    res.json(listaProdutos)
    })

// Read - buscar o produto pelo ID 
    router.get('/produtos/:id', (req, res) => { 
        const id = req.params.id
       const index = listaProdutos.findIndex(produto => produto.id == id) //busca o produto de acordo com a informação dada
       const produto = listaProdutos[index]
       res.json(produto)

   
        })


//Criar produtos

router.post('/produtos', (req, res)=>{
    const novoProduto = req.body
    
    listaProdutos.length
    
    const produto = {
       id: listaProdutos.length + 1,      //cadastra o tamanho da minha lista + 1, ou seja vai automático o cadastramento
       nome: novoProduto.nome,
       preco: novoProduto.preco
    }
    console.log(produto)

    listaProdutos.push(produto)

    res.json({mensage:"produto cadastrado com sucesso!"})


})

//DELETE -> deletar um produto

router.delete('/produtos/:id', (req, res)=>{
    const id = req.params.id
    const index = listaProdutos.findIndex(produto => produto.id == id)
    listaProdutos.splice(index, 1) //acha o item da lista e exclue 1 por vez
    res.json({mensagem:"produto excluído com sucesso!"})

})

router.put('/produtos/:id', (req, res)=>{
    const id = req.params.id
    const novosDados = req.body

    const index = listaProdutos.findIndex(produto => produto.id == id)
    
   

    const produtoAlterado = {
        id: id,
        nome: novosDados.nome,
        preco: novosDados.preco
    }

    listaProdutos[index] = produtoAlterado

    res.json({mensagem:"produto alterado com sucesso!"})


})











module.exports = router