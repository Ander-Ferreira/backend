const mongoose = require('mongoose')

//Minha função de validar ID

function validarID(req, res, next){
    const isValid = mongoose.Types.ObjectId.isValid(req.params.id)
    if(isValid){
        next() //se for válido, prossiga
    }
    else{
        res.status(400).json({mensagem:"ID inválido!"})
    }
}


module.exports = {
    validarID
}

//Exporto minha função para usar como middleware nas minhas rotas
