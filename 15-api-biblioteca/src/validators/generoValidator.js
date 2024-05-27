const yup = require('yup')

/*Obs, se apenas yup.string() ou yup.string().required() não estiver
restrigindo os registros com campos errados, tente usar o strict().typeError(),
estarei usando desta forma em minha aplicação. Caso contrário, siga o modelo de validação
que o professor passou ensinou em aula!
*/


const generoSchema = yup.object().shape({
    acao: yup.string().strict().typeError('Campo precisa ser um texto!'),
    aventura: yup.string().strict().typeError('Campo precisa ser um texto!'),
    comedia: yup.string().strict().typeError('Campo precisa ser um texto!'),
    fantasia: yup.string().strict().typeError('Campo precisa ser um texto!'),
    romance: yup.string().strict().typeError('Campo precisa ser um texto!')
})

//Função que executará as restrições que criei com o yup

function generoValidador(req, res, next){
    generoSchema.validate(req.body, {abortEarly:false})
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
    generoValidador
}

//exporto para usar como middleware em minhas rotas