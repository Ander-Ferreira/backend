const yup = require('yup')

const schema = yup.object().shape({
    nome: yup.string('O campo precisa ser um texto!').required('Campo obrigatório!'),
    descricao: yup.string('O campo precisa ser um texto!').required('Campo obrigatório!')
})

function validarDEPARTAMENTO(req, res, next){
    schema.validate(req.body, {abortEarly:false})
    .then(()=>next())
    .catch(err =>{
        const errors = err.inner.map(e => {
            const erro = {
                campo: e.path,
                errors: e.erros
            }
            return erro
        })
        res.status(400).json({
            mensagem: "Erro na validação de campos!",
            erro: errors
        })
    })
}


module.exports = {
    validarDEPARTAMENTO
}