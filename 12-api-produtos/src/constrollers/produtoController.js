const Produto = require('../models/produtos')

async function getAll(req, res) {
    const produtos = await Produto.find()
    res.json(produtos)
    
}

async function create(req, res) {

   try{ const produto = new Produto(req.body)
    const produtoCriado = await produto.save()
    res.status(201).json(produtoCriado)}
    catch{
        console.log(error)
        res.status(500).json(
            {
                mensagem: "Ocrreu um erro ao cadastrar produto",
                erro: error
            }
        )

    }
    
}

//PARA CASA, FAZER O UPDATE
//getById
//update
//delete




module.exports = {
    getAll,
    create
}

