//Primeira coisa, importar models

const Cargo = require('../models/Cargo')

//Métodos

async function create(req, res) {
    //Usamos o try e catch apenas quando criar algo no banco de dados

    try {
        const cargoCorpo = new Cargo(req.body)
        const cargoSalvar = await cargoCorpo.save()

        res.status(201).json(cargoSalvar)



    }



    catch (error) {
        console.error('Erro ao salvar no banco de dados!', error)
        res.status(400).json({

            mensagem: "Erro ao criar um novo cargo",
            erro: error.message


        })



    }




} //Fim da função create


//Função de get

async function getAll(req, res) {
    res.json(await Cargo.find())

}//Fim da função get


async function getById(req, res) {

    const procurarID = await Cargo.findById(req.params.id)
    if(procurarID){
        res.status(200).json(procurarID)
    }
    else{
        res.status(400).json({mensagem:"Cargo não encontrado!"})
    }


}

async function update(req, res){
    
    try{

        const atualizarCargo = await Cargo.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json(atualizarCargo)


    }

    
    catch(error){

        console.error('Erro ao atualizar no banco de dados!', error)
        res.status(404).json({mensagem:"Cargo não atualizado!"})


    }

}

async function deletar(req, res){
    
    const deletarCargo = await Cargo.findByIdAndDelete(req.params.id)
    res.status(200).json({mensagem:"Cargo excluído com sucesso!"})
}
























module.exports = {
    create,
    getAll,
    getById,
    update,
    deletar


}