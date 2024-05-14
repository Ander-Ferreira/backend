const mongoose = require('mongoose')

//Verifica se o meu id está digitado corretamente
function validarId(req, res, next){
    
    const isValid = mongoose.Types.ObjectId.isValid(req.params.id)
    if(isValid){
        next()
    } else{
        res.status(400).json({mensagem: "id inválido"})
    }


}


module.exports = {
    validarId
}
