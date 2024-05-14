//Primeira coisa, importar models

const Cargo = require('../models/Cargo')

//Métodos

async function create(req, res) {
    //Usamos o try e catch apenas quando criar algo no banco de dados
    const cargoCorpo = new Cargo(req.body)
    const cargoSalvar = await cargoCorpo.save()

    res.status(201).json(cargoSalvar)



} //Fim da função create


//Função de get

async function getAll(req, res) {
    res.json(await Cargo.find())

}//Fim da função get


async function getById(req, res) {

    const procurarID = await Cargo.findById(req.params.id)
    if (procurarID) {
        res.status(200).json(procurarID)
    }
    else {
        res.status(400).json({ mensagem: "Cargo não encontrado!" })
    }


}

async function update(req, res) {

    const atualizarCargo = await Cargo.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (cargoAtualizado) {
        res.status(200).json(atualizarCargo)
    }

    else {
        res.status(404).json({ mensagem: "Cargo não atualizado!" })

    }



}

async function deletar(req, res) {

    const deletarCargo = await Cargo.findByIdAndDelete(req.params.id)
    if (deletarCargo) {
        res.status(200).json(
            {
                mensagem: "Cargo excluído com sucesso!",
                cargo: deletarCargo
            })
    }
    else {
        res.status(400).json({ mensagem: "Cargo não excluído!" })
    }

}
























module.exports = {
    create,
    getAll,
    getById,
    update,
    deletar


}