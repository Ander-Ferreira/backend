const Projeto = require('../models/Projeto')

//Métodos

//POST
async function create(req, res){
    const requisicaoCORPO = new Projeto(req.body)
    const cadastrarPROJETO = await requisicaoCORPO.save()
    res.status(201).json(cadastrarPROJETO)
}

//GET (Buscar tudo)

async function getALL(req, res){
    const buscarTUDO = await Projeto.find()
    res.json(buscarTUDO)
}

//GET (Buscar por ID)

async function getById(req, res){
    const procurarID = await Projeto.findById(req.params.id)
    if(procurarID){
        res.status(200).json(procurarID)
    }
    else{
        res.status(404).json({mensagem:"Projeto não encontado!"})
    }
}

async function update(req, res){
    const procurarATUALIZAR = await Projeto.findByIdAndUpdate(req.params.id, req.body)
    if(procurarATUALIZAR){
        res.status(200).json({mensagem:"Projeto atualizado com sucesso!"})

    }

    else{
        res.status(404).json({mensagem:"Projeto não encontrado!"})
    }
}

async function remove(req, res){
    const procurarDELETAR = await Projeto.findByIdAndDelete(req.params.id)
    if(procurarDELETAR){
        res.status(200).json({mensagem:"Projeto excluiído com sucesso!"})
    }
    else{
        res.status(404).json({mensagem:"Projeto não encontrado!"})
    }
}


module.exports = {
    create,
    getALL,
    getById,
    update,
    remove
}

