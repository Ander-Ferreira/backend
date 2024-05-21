require('dotenv').config()
const yup = require('yup');
const jwt = require('jsonwebtoken')

const JWT_SECRET = process.env.JWT_SECRET

const usuarioSchema = yup.object().shape({
    nome: yup.string().required('Campo obrigatório!'),
    email: yup.string().email('Email inválido!'),
    senha: yup.string().required('Campo obrigatório!')
});

function usuarioValidador(req, res, next) {
    usuarioSchema.validate(req.body, { abortEarly: false })
        .then(() => next())
        .catch(err => {
            const errors = err.inner.map(e => ({
                campo: e.path,
                erros: e.errors
            }));
            res.status(400).json({
                mensagem: "Falha na validação de campos!",
                erros: errors
            });
        });
}

//Validador de login 

const loginSchema = yup.object().shape({
    nome: yup.string().required('Campo obrigatório!'),
    email: yup.string().email('Email inválido!'),
    senha: yup.string().required('Campo obrigatório!')
});

function loginValidador(req, res, next) {
    loginSchema.validate(req.body, { abortEarly: false })
        .then(() => next())
        .catch(err => {
            const errors = err.inner.map(e => ({
                campo: e.path,
                erros: e.errors
            }));
            res.status(400).json({
                mensagem: "Falha na validação de campos!",
                erros: errors
            });
        });
}


async function checarTOKEN(req, res, next){
    

    try{
    
    const AuthorizationHeader = req.get('Authorization')
    const separator = AuthorizationHeader.split(' ') //divide com um espaço em branco
    const token = separator[1]
     
    console.log(token)

        jwt.verify(token, JWT_SECRET)

    }
    catch(error){
        return res.status(401).json({mensagem: "token inválido"})

    }
}


module.exports = {
    usuarioValidador,
    loginValidador,
    checarTOKEN
};
