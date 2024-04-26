const express = require('express')
const router = express.Router()

//Lógica

//Requisitos:
//- Cada livro deve ter os seguintes campos: titulo, autor, editora, ano e preco.
//- Implementar rotas para realizar as operações de CRUD (CREATE, READ, UPDATE,


const livrosLivro = [
    {
        id: 1,
        titulo: "O senhor dos anéis",
        autor:"Tolkien",
        editora: "ABC",
        ano: 1975,
        preco: 180
    }
]


//Buscar todos
router.get('/livros', (req, res)=>{
    res.json(livrosLivro)
})

//Buscar por id
router.get('/livros/:id', (req, res)=>{
    const id = req.params.id
    const procurarLivro = livrosLivro.find(procurar=> procurar.id == id)
    if(procurarLivro){
        return res.status(200).json(procurarLivro)
    }
    return res.status(404).json({mensagem:"Livro não encontrado!"})
})


//Cadastrar

router.post('/livros', (req, res)=>{
    const corpoLivro = req.body
    if(!corpoLivro.titulo || !corpoLivro.autor || !corpoLivro.editora || !corpoLivro.ano || !corpoLivro.preco){
        return res.status(400).json({mensagem:"Preencha todos os campos, titulo, autor, editora, ano, preco"})
    }
    const cadastrarLivros = {
        id: livrosLivro.length + 1,
        titulo: corpoLivro.titulo,
        autor: corpoLivro.autor,
        editora: corpoLivro.editora,
        ano: corpoLivro.ano,
        preco: corpoLivro.preco
    }
    livrosLivro.push(cadastrarLivros)
    
    return res.status(200).json(livrosLivro)
})

router.delete('/livros/:id', (req, res)=>{
    const id = req.params.id
    const procurarLivro = livrosLivro.findIndex(procurar=> procurar.id == id)
    if(procurarLivro == -1){
        return res.status(400).json({mensagem:"Livro não encontrado!"})
    }
    livrosLivro.splice(procurarLivro, 1)
    res.status(200).json({mensagem:"Livro excluído com sucesso!"})


})

router.put('/livros/:id', (req, res)=>{
    const id = req.params.id
    const corpoLivro = req.body
    const procurarLivro = livrosLivro.findIndex(procurar=> procurar.id == id)
    
    if(procurarLivro == -1){
       return res.status(404).json({mensagem:"Livro não encontrado!"})
    }

    if(!corpoLivro.titulo || !corpoLivro.autor || !corpoLivro.editora || !corpoLivro.ano || !corpoLivro.preco){
        return res.status(400).json({mensagem:"Preencha todos os campos, titulo, autor, editora, ano, preco"})
    }

    const atualizarLivros = {
        id: Number(id),
        titulo: corpoLivro.titulo,
        autor: corpoLivro.autor,
        editora: corpoLivro.editora,
        ano: corpoLivro.ano,
        preco: corpoLivro.preco
    }

    livrosLivro[procurarLivro] = atualizarLivros

    return res.status(200).json({mensagem:"Livro atualizado com sucesso!"})

})

//Buscando por autor
router.get('/livros/autor/:autor', (req, res)=>{
    const autor = req.params.autor
    const procurarAutor = livrosLivro.filter(procurar=> procurar.autor.toUpperCase() == autor.toUpperCase())
    if(procurarAutor){
        return res.status(200).json(procurarAutor)
    }
    return res.status(404).json({mensagem:"Autor não encontrado!"})

})


//Retornar o preço médio de todos os livros
//- (1,0 pontos) Criar uma rota e implementação para calcular e retornar o preço
// médio de todos os livros da livros (GET /livros/preco/media)

router.get('/livros/preco/media', (req, res)=>{
    let precoMedio = 0
    livrosLivro.forEach(procurar=>{
        precoMedio = (precoMedio + procurar.preco) / livrosLivro.length
    })
    return res.status(200).json({
        precoMedio: precoMedio
    })
})














module.exports = router