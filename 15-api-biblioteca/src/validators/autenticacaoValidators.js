require('dotenv')
const jwt = require('jsonwebtoken')
const yup = require('yup')

//Importo meu secret

const JWT_SECRET = process.env.JWT_SECRET

//Meu esquema de validar usuários

const usuarioSchema = yup.object().shape({
    nome: yup.string().strict().typeError('Campo precisa ser texto!').required('Campo obrigatório!'),
    email: yup.string().strict().email('Email inválido!').required('Campo obrigatório!'),
    senha: yup.string().strict().required('Campo obrigatório!'),
})

//Minha função para validar o usuário
function usuarioVALIDADOR(req, res, next){
    usuarioSchema.validate(req.body, {abortEarly:false})
    .then(()=>next())
    .catch(err => {
        const errors = err.inner.map(e => {
            const erro = {
                campo: e.path,
                erros: e.errors
            }
            return erro
        })
        res.status(400).json(
            {
                mensagem: "Falha na validação dos campos",
                erros: errors
            }
        )
    })
}  

const loginSchema = yup.object().shape({

    email: yup.string('Campo precisa ser um texto!').email('Email inválido!'),
    senha: yup.string().required('Campo obrigatório!')

})


//Função para validar login

function loginVALIDADOR(req, res, next){
    loginSchema.validate(req.body, {abortEarly:false})
    .then(()=> next())
    .catch(err => {
        const errors = err.inner.map(e => {
            const erro = {
                campo: e.path,
                erros: e.errors
            }
            return erro
        })
        res.status(400).json(
            {
                mensagem: "Falha na validação dos campos",
                erros: errors
            }
        )
    })
}

//Função para checar token

async function checarTOKEN(req, res, next){
    try{
        const authorizationHEADER = req.get('Authorization')
        const separator = authorizationHEADER.split(' ')
        const token = separator[1]

        console.log(token)

        jwt.verify(token, JWT_SECRET)
        next()


    }

    catch(error){
        return res.status(401).json({mensagem:"Token inválido!"})

    }

}

module.exports = {
    usuarioVALIDADOR,
    loginVALIDADOR,
    checarTOKEN



}

//Exporto para usuarioVALIDADOR e loginVALIDADOR para minhas rotas de autenticação
//E checarTOKEN para meu index




