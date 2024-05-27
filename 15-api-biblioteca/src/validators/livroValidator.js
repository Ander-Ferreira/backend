const yup = require('yup')

/*Obs, se apenas yup.string() ou yup.string().required() não estiver
restrigindo os registros com campos errados, tente usar o strict().typeError(),
estarei usando desta forma em minha aplicação como uma demonstração alternativa. 
*/

const livroSchema = yup.object().shape({

    titulo: yup.string().strict().typeError('Campo precisa ser texto!').required('Campo obrigatório!'),
    sinopse: yup.string().strict().typeError('Campo precisa ser texto!').required('Campo obrigatório!'),
    idioma: yup.string().strict().typeError('Campo precisa ser texto!').required('Campo obrigatório!'),
    ano: yup.date('Data inválida!').required('Campo obrigatório!'),
    preco: yup.string().strict().typeError('Campo precisa ser texto!').required('Campo obrigatório!'),
    genero: yup.string().strict().typeError('Campo precisa ser texto!'),
    autor: yup.string().strict().typeError('Campo precisa ser texto!')

})

//Função para executar minhas restrições

function livroValidador(req, res, next){
    livroSchema.validate(req.body, {abortEarly:false})
    .then(()=>next())
    .catch(err=>{ 
        const errors = err.inner.map(e => {
            const erro = {
                campo: e.path,
                erros: e.errors
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
    livroValidador
}
//Importo para minhas rotas como middleware

