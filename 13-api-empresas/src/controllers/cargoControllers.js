//Importamos o modelo que criamos lá em models

const Cargo = require('../models/cargo')

//Agora criaremos nossos métodos


async function create(req, res) {

//Toda vez que for para criar algo no banco, ou atualizar, utilize tru{} e catch{}

    try {
        const cargo = new Cargo(req.body)
        const criarCargo = await cargo.save()
        res.status(201).json('Cargo criado com sucesso!')
    }
    catch (error) {
        console.error('Erro ao criar cargo', error)
        res.status(400).json({
            mensagem: 'Erro ao criar cargo!',
            erro: error.message
        })

    }

}


async function getAll(req, res) {
    res.json(await Cargo.find())

}

async function getById(req, res) {

    const procurarID = await Cargo.findById(req.params.id)

    if (cargo) {
        res.status(200).json(procurarID)
    }

    else {
        res.status(404).json('Cargo não encontrado!')
    }

}


async function update(req, res) {
    try{
        const atualizar = await Cargo.findByIdAndUpdate(req.params.id, req.body)
        res.json(atualizar)
        
    }

    catch(error){
        
        console.error("Erro ao criar cargo", error)
        
        res.status(400).json({
            
            
            mensagem: "Erro ao atualizar cargo!",
            erro: error

        })

    }
    
}

async function deletar(req, res) {
    const deletarCargo = await Cargo.findByIdAndDelete(req.params.id)
    res.json('Cargo excluído com sucesso!')

    
}


module.exports = {
    create,
    getAll,
    getById,
    update,
    deletar
}
