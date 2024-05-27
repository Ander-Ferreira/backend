const Livros = require('../models/Livros')

//Construo os métodos das rotas dos meu livros

//POST - criar

async function create(req, res){
    const reqCorpo = new Livros(req.body)
    const cadastrarLivro = await reqCorpo.save()
    res.status(201).json({cadastrarLivro, mensagem:"Livro cadastrado com sucesso!"})
}

//GET - buscar todos

async function getAll(req, res){
    const buscarTODOS = await Livros.find().populate((['genero', 'autor']))
    res.json(buscarTODOS)
}

//GET - buscar por id

async function getById(req, res){
    const buscarID = await Livros.findById(req.params.id).populate((['genero', 'autor']))
    if(buscarID){
        return res.status(200).json(buscarID)
    }
    res.status(404).json({mensagem:"Livro não encontrado!"})

}

//PUT - atualizar

async function update(req, res){
    const procurarATUALIZAR = await Livros.findByIdAndUpdate(req.params.id, req.body)
    if(procurarATUALIZAR){
       return res.status(200).json({mensagem:"Livro atualizado com sucesso!"})
    }
    res.status(404).json({mensagem:"Livro não encontrado!"})

}

//DELETE - deletar

async function remove(req, res){
    const procurarDELETAR = await Livros.findByIdAndDelete(req.params.id)
    if(procurarDELETAR){
       return res.status(200).json({mensagem:"Livro deletado com sucesso!"})
    }
    res.status(404).json({mensagem:"Livro não encontrado!"})
}











module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
}
//Exporto para minhas rotas
