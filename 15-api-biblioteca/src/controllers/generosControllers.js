const Generos = require('../models/Generos')

//Contruo os métodos das rotas dos meu Generos

//POST - cadastrar

async function create(req, res){
    const reqCorpo = new Generos(req.body)
    const cadastrarGenero = await reqCorpo.save()
    res.status(201).json({mensagem:"Gênero cadastrado com sucesso"})
}

//GET - buscar todos

async function getAll(req, res){
    const buscarTODOS = await Generos.find()
    res.status(200).json(buscarTODOS)
}

//GET - buscar por ID

async function getById(req, res){
    const buscarID = await Generos.findById(req.params.id)
    if(buscarID){
       return res.status(200).json(buscarID)
    }
    res.status(404).json({mensagem:"Gênero não encontrado!"})
}


//PUT - atualizar

async function update(req, res){
    const procurarATUALIZAR = await Generos.findByIdAndUpdate(req.params.id, req.body)
    if(procurarATUALIZAR){
        return res.status(200).json({mensagem:"Genero atualizado com sucesso!"})
    }
    res.status(404).json({mensagem:"Genero não encontrado!"})

}

async function remove(req, res){
    const procurarDELETAR = await Generos.findByIdAndDelete(req.params.id)
    if(procurarDELETAR){
        return res.status(200).json({mensagem:"Genero deletado com sucesso!"})
    }
    res.status(404).json({mensagem:"Genero não encontrado!"})
}


















module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
}