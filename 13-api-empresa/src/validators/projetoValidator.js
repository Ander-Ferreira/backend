const yup = require('yup')

const schema = yup.object().shape({
    nome: yup.string('O campo precisa ser um texto!').required('O campo é obrigatório!'),
    descricao:yup.string('O campo precisa ser um texto!'),
    data_inicio:yup.date('Data inválida').required('O campo é obrigatório!'),
    data_fim:yup.date('Data inválida!').required('O campo é obrigatório!')

})

function projetoVALIDADOR(req, res, next){
    schema.validate(req.body, {abortEarly:false})
    .then(()=>next())
    .catch(err=>{
        const errors = err.inner.map(e =>{
            const erro = {
                campo: e.path,
                errors: e.errors
            }
            return erro
        })
        res.status(400).json({
            mensagem:"Falha na validação de campos!",
            erros: errors
        })
    })
}


module.exports = {
    projetoVALIDADOR
}