const yup = require('yup')

//Meu esquema de validação de carrinho

const carrinhoSchema = yup.object().shape({
    usuarioId: yup.string().strict().typeError('Campo precisa ser texto!').required('Campo obrigatório!'),
    produtoId: yup.string().strict().typeError('Campo precisa ser texto!').required('Campo obrigatório!'),
    quantidade: yup.number().strict().typeError('Campo precisa ser número!').required('Campo obrigatório!'),
    nome: yup.string().strict().typeError('Campo precisa ser texto!').required('Campo obrigatório!'),
    preco: yup.number().strict().typeError('Campo precisa ser número!').required('Campo obrigatório!')
})

//Minha função para executar a validação do meu carinho
function validarCarrinho(req, res, next) {
    carrinhoSchema.validate(req.body, { abortEarly: false })
        .then(() => next())
        .catch(err => {
            const errors = err.inner.map(e => ({
                campo: e.path,
                erros: e.errors
            }))
            res.status(400).json({
                mensagem: "Falha na validação de campos!",
                erros: errors
            })
        })
}

module.exports = {
    validarCarrinho
}
