//Importamos o nosso modelo que criamos em models
const Cargo = require('../models/Cargo')


//Agora criaremos nossas funções que receberão as requisições de nossas rotas

//Função de criação(POST)

//Detalhe importante, usamos async e await nas funções para sincronizar com o banco de dados
async function create(req, res){
    
    //note que sempre estaremos usando o Cargo que importamos de nossos modelos, será tudo baseado nele

    const requisicaoCORPO = new Cargo(req.body) 
    const cadastrarCARGO = await requisicaoCORPO.save()
    res.status(201).json(cadastrarCARGO)
}

//Função de buscar todos (get)
async function getAll(req, res){
    const buscarTODOS = await Cargo.find()
    res.json(buscarTODOS)

}

//Função para buscar por ID (get)

async function getById(req, res){
    const procurarID = await Cargo.findById(req.params.id)
    
    if(procurarID){
        res.status(200).json(procurarID)
    }
    else{
        res.status(404).json({mensagem:"ID não encontrado!"})
    }
}

//Função para atualizar (put)

async function update(req, res){
    const procurarATUALIZAR = await Cargo.findByIdAndUpdate(req.params.id, req.body)
    if(procurarATUALIZAR){
        res.status(200).json(
            {
                mensagem:"Cargo atualizado com sucesso!",
                cargo: procurarATUALIZAR
            
            })
    }

    else{
        res.status(404).json(
            {
                mensagem:"Cargo não encontrado!"

            })
    }

}

//Função para deletar (delete)

async function remove(req, res){
    const procurarDELETAR = await Cargo.findByIdAndDelete(req.params.id)
    if(procurarDELETAR){
        res.status(200).json({mensagem:"Cargo deletado com sucesso!"})
    }
    else{
        res.status(404).json({mensagem:"Cargo não encontrado!"})
    }
}






//Agora expotamos, é importante exportar a função assim que a terminar e testá-la, nunca deixa para testar tudo de uma vez

module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
}

//Exportaremos essas funções para usarmos em nossas rotas (routes)

