const Cargo = require('../models/cargo')

//Métodos

async function create(req, res) {
    try{
        const cargo = new Cargo(req.body)
        const cargoCriado = await cargo.save()
        
        res.status(201).json({mensagem:'Cargo criado com sucesso!'})



    }
    catch(error){
        console.error('Erro ao criar cargo: ', error)
        
        res.status(400).json({
           
            mensagem:"Erro ao criar cargo",
            erro: error.message

        })



    }

    
}





module.exports = {
    create

}