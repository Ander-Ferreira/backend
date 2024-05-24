require('dotenv').config() //importo nossa senha de criptografia do nosso arquivo .env
const yup = require('yup') //importo nossa biblioteca de validação
const jwt = require('jsonwebtoken') //importo nossa biblioteca de token

//Importo nossa senha de criptografia do arquivo .env

const JWT_SECRET = process.env.JWT_SECRET

//Faço o esquema de validação do  usuário

const usuarioSchema = yup.object().shape({
    nome: yup.string('precisa ser em texto').required('Campo obrigatório!'),
    email: yup.string('Campo precisa ser um texto!').email('Email inválido!'),
    senha: yup.string().required('Campo obrigatório!')
})

//Função para validar o usuário

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


//Faço o esquema de validação do login

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
   try{ const authorizationHEADER = req.get('Authorization')
    const separator = authorizationHEADER.split(' ') //divide com um espaço em branco
    const token = separator[1]

    console.log(token)

    jwt.verify(token, JWT_SECRET)
    next()
   }
   catch(error){
    return res.status(401).json({mensagem:"Token inválido"})

   }
}

//Por fim exporto minhas funções validadoras e a de checar token
module.exports = {
    usuarioVALIDADOR,
    loginVALIDADOR,
    checarTOKEN
}

//Usaremos estar funções em nossas rotas