const yup = require('yup')

const schema = yup.object().shape({

    titulo: yup.string('O campo precisa ser um texto!').required('O campo precisa ser preenchido!'),
    descricao: yup.string('O campo precisa ser um texto!'),
    data_inicio: yup.date('Data inválida!').required('Campo obrigatório!'),
    data_fim: yup.date('Data inválida').required('Campo obrigatório!'),
    funcionario: yup.string('O campo precisa da ID de projeto em formato de texto!').required('Campo obrigatório!'),
    projeto: yup.string('O campo precisa da ID de projeto em formato de texto!').required('Campo obrigatório!')

})

function tarefaVALIDADOR(req, res, next){
    schema.validate(req.body, {abortEarly:false})
    .then(()=>next())
    .catch(err=>{
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
    tarefaVALIDADOR
}