//para id usaremos a biblioteca moongose, já que validaremos a quantidade de caracteres de uma id passada como parametros
//Se for menos do que o requerido, exibirá uma mensagem ao invés de crashar a aplicação
const moongose = require('mongoose') 

function validarID(req, res, next){
    const isValid = moongose.Types.ObjectId.isValid(req.params.id) //verifica se o id é válido
    if(isValid){
        next()
    }
    else{
        res.status(400).json({mensagem:"ID é inválido!"})
    }


}

//Por fim exportamos nossa função de validação como objeto

module.exports = {
    validarID
}

//Usaremos em nossas rotas (routes)
