const Funcionario = require('../models/Funcionario')

//Meu métodos

async function create(req, res) {

    try {
        const corpoFuncionario = new Funcionario(req.body)
        const criarFuncionario = await corpoFuncionario.save()
        res.status(200).json(criarFuncionario)


    }

    catch (error) {
        console.error('Não foi possível criar funcionário DB!', error)
        res.status(400).json(
            {
                mensagem: "Erro ao registrar funcionário!",
                erro: error.message

            }
        )

    }

}

async function getAll(req, res) {
    res.json(await Funcionario.find().populate('cargo'))

}

async function getById(req, res) {
    const procurarID = await Funcionario.findById(req.params.id).populate('cargo')
    if (procurarID) {
        res.status(200).json(procurarID)
    }
    else {
        res.status(404).json({
            mensagem: "Pessoa não encontrada!"
        })
    }
}

async function update(req, res) {
    try {
        const procurarAtualizar = await Funcionario.findByIdAndUpdate(req.params.id, req.body).populate('cargo')
        res.status(201).json(procurarAtualizar)
    }

    catch(error){
        console.error('Erro ao atualizar cargo no banco de dados!')
        res.status(400).json({
            mensagem:"Cargo não atualizado!",
            erro: error.message

        })
    }



}

async function deletar(req, res){
    const procurarDeletar = await Funcionario.findByIdAndDelete(req.params.id)
    res.json({
        mensagem:"Deletado com sucesso!",
        funcionario: procurarDeletar
    })
}


module.exports = {
    create,
    getAll,
    getById,
    update,
    deletar
}