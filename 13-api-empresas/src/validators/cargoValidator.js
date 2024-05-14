//Comando para instalar a nova biblioteca de validação npm install yup
const yup = require('yup')

//Estrutura de validação

const cargoSchema = yup.object().shape({
    nome: yup.string('Campo precisa ser um texto').required('campo obrigatório'),
    descricao: yup.string(),
    salario: yup.number('Campo precisa ser número').min(1412, 'precisa ser maior que o salário mínimo').required()




})

//Middlewares (Intermediários) de validações
function cargoValidador(req, res, next) {
    cargoSchema.validate(req.body, {abortEarly:false} ) //abortEarly: false evita que devolva a resposta no primeiro erro da validação
           .then(() => next())
           .catch(err => res.status(400).json({mensagem:err.message}))   


    
}



module.exports = {
    cargoValidador
}