const express = require('express')
const router = express.Router()


//lógica
const compras = [
    {
        id: 1,
        item: "arroz",
        preco: 29.99
    }
]

//busca geral
router.get('/compras', (req, res)=>{
    res.json(compras)
})

//busca por id
router.get('/compras/:id', (req, res)=>{
    const id = req.params.id
    const procurarID = compras.find(procurar => procurar.id == id)
    if(procurarID){
        res.status(200).json(procurarID)
    }
    else{
        res.status(404).json({mensagem: "objeto não encontrado!"})
    }
})

//post - cadastrar

router.post('/compras', (req, res)=>{
    const requisicao = req.body
    if(!requisicao.item || !requisicao.preco){
        res.status(400).json({mensagem:"preencha todos os campos!"})
    }
    else{
        const arrayCadastro = {
            id: compras.length + 1,
            item: requisicao.item,
            preco: requisicao.preco
        }
        compras.push(arrayCadastro)
        res.status(200).json({mensagem:"compra cadastrada com sucesso!"})
    }
})

//delete - deletando

router.delete('/compras/:id', (req, res)=>{
    const id = req.params.id
    const procurarID = compras.findIndex(procurar => procurar.id == id)

    if(procurarID == -1){
        res.status(404).json({mensagem:"Objeto não encontrado!"})
    }
    else{
        compras.splice(procurarID, 1)
        res.status(200).json({mensagem:"Objeto excluído com sucesso!"})
    }

})

//put - atualizar
router.put('/compras/:id', (req, res)=>{
    const id = req.params.id
    const requisicao = req.body
    if(!requisicao.item || !requisicao.preco){
        res.status(400).json({mensagem:"Preencha todos os campos necessários!"})
    }
    else{
        const procurarID = compras.findIndex(procurar=> procurar.id == id)
        if(procurarID == -1){
            res.status(404).json({mensagem:"Este produto não existe!"})
        }
        else{
            const atualizarCompras = {
                id: Number(id),
                item: requisicao.item,
                preco: requisicao.preco
            }
            compras[procurarID] = atualizarCompras
            res.status(200).json({mensagem:"Compra atualizada com sucesso!"})
        }
        }
})























module.exports = router