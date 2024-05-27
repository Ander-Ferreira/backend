const yup = require('yup')

/*Obs, se apenas yup.string() ou yup.string().required() não estiver
restrigindo os registros com campos errados, tente usar o strict().typeError(),
estarei usando desta forma em minha aplicação.
*/


const autorSchema = yup.object().shape({
    nome: yup.string().strict().typeError('Campo precisa ser texto!').required('Campo obrigatório!'),
    sobre: yup.string().strict().typeError('Campo precisa ser texto!').required('Campo obrigatório!'),
    nascionalidade: yup.string().strict().typeError('Campo precisa ser texto!').required('Campo obrigatório!'),
    data_nascimento: yup.date('Data inválida!').required('Campo obrigatório!'),
    livros: yup.string().strict().typeError('Campo precisa ser um texto!')
})

//Minha função para executar minhas restrições criadas com o yup

function autorValidador(req, res, next){
    autorSchema.validate(req.body, {abortEarly: false})
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
    autorValidador
}

//Exporto para usar como middleware em minhas