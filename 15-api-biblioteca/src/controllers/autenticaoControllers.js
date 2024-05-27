require('dotenv').config()
const Usuario = require('../models/Usuario')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//Importação do meu secret

const JWT_SECRET = process.env.JWT_SECRET



//Minha função para registrar usuário
async function registrar(req, res){
    const {nome, senha, email} = req.body

    const usuarioEXISTE = await Usuario.findOne( {email} )

    if(usuarioEXISTE){
        return res.status(400).json({mensagem:"Usuário já existe!"})
    }

    const hash = await bcrypt.hash(senha, 10)

    const usuario = new Usuario({
        nome,
        email,
        senha: hash
    }
)

await usuario.save()

res.status(201).json({mensagem:"Usuário cadastrado com sucesso!"})

}




//Minha função para Logar o usuário

async function login(req, res){
    const {email, senha} = req.body
    const usuario = await Usuario.findOne( {email} )

    if(!usuario){
        return res.status(401).json({mensagem:"Usuário não cadastrado!"})
    }

    const senhaVALIDA = await bcrypt.compare(senha, usuario.senha)

    if(!senhaVALIDA){
        return res.status(401).json({mensagem:"Usuário ou senha inválidos!"})
    }

    const token = jwt.sign({email: usuario.email}, JWT_SECRET, {expiresIn: '1h'})
    res.json({
        mensagem:"Login efetuado com sucesso",
        token
    })
}



module.exports = {
    registrar,
    login
}

//Exporto minhas funções de autenticação para minhas rotas de autenticação

