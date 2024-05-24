const Aluno = require('../models/Aluno')

//Funções


//Criar (post)
async function create(req, res){
    const requisicaoCORPO = new Aluno(req.body)
    const criarAluno = await requisicaoCORPO.save()
    res.status(201).json(criarAluno)

}

//Buscar todos (get)

async function getALL(req, res){
    
    const buscarTODOS = await Aluno.find() 
    res.json(buscarTODOS) 
    res.json(buscarTODOS) 
}

//Buscar por ID (get)
async function getById(req, res){
    const procurarID = await Aluno.findById(req.params.id)
    if(procurarID){
        res.status(200).json(procurarID)
    }
    else{
        res.status(404).json({
            mensagem:"Aluno não encontrado!"
        })
    }
}

//Atualizar (put)

async function update(req, res){
    const procurarATUALIZAR = await Aluno.findByIdAndUpdate(req.params.id, req.body)
    if(procurarATUALIZAR){
    res.json({mensagem:"Aluno atualizado com sucesso!"})
    }
    else{
        res.status(400).json({mensagem:"Erro ao atualizar aluno!"})
    }

}

//Deletar (delete)

async function remove(req, res){
    const procurarDELETAR = await Aluno.findByIdAndDelete(req.params.id)
    if(procurarDELETAR){
        res.json({mensagem:"Aluno deletado com sucesso!"})
    }
    else{
        res.status(400).json({mensagem:"Erro ao deletar Aluno!"})
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


