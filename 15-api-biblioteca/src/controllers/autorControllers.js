const Autor = require('../models/Autor')

//Contruo os métodos das rotas dos meu Generos

//POST- criar
async function create(req, res){
    const reqCorpo = new Autor(req.body)
    const cadastrarAutor = await reqCorpo.save()
    res.status(200).json(cadastrarAutor)

}

//GET - buscar todos

async function getAll(req, res){
    const buscarTODOS = await Autor.find().populate('livros')
    res.status(200).json(buscarTODOS)
}

//GET - buscar por id

async function getById(req, res){
    const buscarID = await Autor.findById(req.params.id).populate('livros')
    if(buscarID){
        return res.status(200).json(buscarID)
    }
    res.status(404).json({mensagem:"Autor não encontrado!"})
}

//PUT - atualizar

async function update(req, res){
    const procurarATUALIZAR = await Autor.findByIdAndUpdate(req.params.id, req.body)
    if(procurarATUALIZAR){
       return res.status(200).json({mensagem:"Autor atualizado com sucesso!"})
    }
    res.status(404).json({mensagem:"Autor não encontrado!"})

}

//DELETE - deletar

async function remove(req, res){
    const procurarDELETAR = await Autor.findByIdAndDelete(req.params.id)
    if(procurarDELETAR){
        return res.status(200).json({mensagem:"Autor deletado com sucesso!"})
    }
    res.status(404).json({mensagem:"Autor não encontrado!"}) 
}







module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
}