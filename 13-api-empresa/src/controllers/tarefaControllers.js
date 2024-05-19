const Tarefa = require('../models/Tarefa')

//Métodos


//POST
async function create(req, res){
    const corpoREQUISICAO = new Tarefa(req.body)
    const cadastrarTAREFA = await corpoREQUISICAO.save()
    res.status(201).json(cadastrarTAREFA)

}

//GET (Buscar tudo)
async function getALL(req, res){
    const buscarTUDO = await Tarefa.find().populate((['funcionario', 'projeto']))
    res.json(buscarTUDO)
}

//GET (Buscar por ID)
async function getById(req, res){
    const procurarID = await Tarefa.findById(req.params.id).populate((['funcionario', 'projeto']))
    if(procurarID){
        res.status(200).json(procurarID)
    }
    else{
        res.status(404).json({mensagem:"Tarefa não encontrada!"})
    }
}

//PUT

async function update(req, res){
    const procurarATUALIZAR = await Tarefa.findByIdAndUpdate(req.params.id, req.body)
    if(procurarATUALIZAR){
        res.status(200).json({mensagem:"Tarefa atualizado com sucesso!"})
    }
    else{
        res.status(400).json({mensagem:"Tarefa não encontrado!"})
    }
}

async function remove(req, res){
    const procurarDELETAR = await Tarefa.findByIdAndDelete(req.params.id)
    if(procurarDELETAR){
        res.status(200).json({mensagem:"Tarefa excluído com sucesso!"})
    }
    else{
        res.status(404).json({mensagem:"Tarefa não encontrado!"})
    }
}

module.exports = {
    create,
    getALL,
    getById,
    update,
    remove
}

