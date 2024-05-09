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


async function getById(req, res) {
    try
    {const procurarProdutos = await Produto.findById(req.params.id)
    res.status(200).json(procurarProdutos)}
    catch (error){
        res.status(500).json(
          
            { mensagem: "Erro ao procurar produto",
              erro: error
            }

        )
    }
    
}

async function update(req, res){
   try{ const procurarProdutos = Produto.findByIdAndUpdate(req.params.id, {
        nome:req.body.nome, 
        preco:req.body.preco,
        tipo: req.body.tipo,
        tag: req.body.tag
    })

    return res.status(200).json({mensagem:'Produto atualizado com sucesso!'})
}

    catch (error){
        return res.status(500).json({mensagem:'Erro ao atualizar produto!'})

    }

}

async function deletar(req, res) {
   try{ const deletarProdutos = await Produto.findByIdAndDelete(req.params.id)
    res.status(200).json({mensagem:'Produto deletado com sucesso!'})
   }
   catch(error){
    res.status(500).json({mensagem:'Erro ao deletar produto',
                          erro: error


    })

   }
    
}




    

    



//PARA CASA, FAZER O UPDATE
//getById
//update
//delete




module.exports = {
    getAll,
    create,
    getById,
    update,
    deletar
}

