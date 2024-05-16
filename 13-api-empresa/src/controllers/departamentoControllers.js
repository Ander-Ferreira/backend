const Departamento = require('../models/Departamento')


async function create(req, res){
    const cadastrarCorpo = new Departamento(req.body)
    const cadastrarDepartamento = await cadastrarCorpo.save()
    res.json(cadastrarDepartamento)
}

async function getALL(req, res){
    const procurarTUDO = await Departamento.find()
    res.json(procurarTUDO)
    
}

async function getById(req,res){
    const procurarID = await Departamento.findById(req.params.id)
    if(procurarID){
        res.status(200).json(procurarID)
    }
    else{
        res.status(404).json({
            mensagem:"Departamento não encontrado!"
        })
    }

}

async function update(req, res){
    const procurarATUALIZAR = await Departamento.findByIdAndUpdate(req.params.id, req.body)
    if(procurarATUALIZAR){
        res.status(200).json(procurarATUALIZAR)
    }
    else{
        res.status(404).json({
            mensagem:"Departamento não achado!"
        })
    }

}

async function remove(req, res){
    const procurarAPAGAR = await Departamento.findByIdAndDelete(req.params.id)
    res.status(200).json({mensagem:"Cargo apagado com sucesso!"})
}


module.exports = {
    create,
    getALL,
    getById,
    update,
    remove
}