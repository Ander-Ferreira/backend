const Funcionario = require('../models/Funcionario')

//Funções


//Criar (post)
async function create(req, res){
    const requisicaoCORPO = new Funcionario(req.body)
    const criarFUNCIONARIO = await requisicaoCORPO.save()
    res.status(201).json(criarFUNCIONARIO)

}

//Buscar todos (get)

async function getALL(req, res){
    
    const buscarTODOS = await Cargo.find().populate((['cargo', 'departamento'])) 
    res.json(buscarTODOS) //.populate('cargo') nos dará junto o cargo dos funcionários
    res.json(buscarTODOS) 
}

//Buscar por ID (get)
async function getById(req, res){
    const procurarID = await Funcionario.findById(req.params.id).populate((['cargo', 'departamento'])) 
    if(procurarID){
        res.status(200).json(procurarID)
    }
    else{
        res.status(404).json({
            mensagem:"Funcionário não encontrado!"
        })
    }
}

//Atualizar (put)

async function update(req, res){
    const procurarATUALIZAR = await Funcionario.findByIdAndUpdate(req.params.id, req.body)
    if(procurarATUALIZAR){
    res.json({mensagem:"Cargo atualizado com sucesso!"})
    }
    else{
        res.status(400).json({mensagem:"Erro ao atualizar cargo!"})
    }

}

//Deletar (delete)

async function remove(req, res){
    const procurarDELETAR = await Funcionario.findByIdAndDelete(req.params.id)
    if(procurarDELETAR){
        res.json({mensagem:"Funcionário deletado com sucesso!"})
    }
    else{
        res.status(400).json({mensagem:"Erro ao deletar funcionário!"})
    }
}



//Exportação de funções para nossas rotas (routes)

module.exports = {
    create,
    getALL,
    getById,
    update,
    remove

}


