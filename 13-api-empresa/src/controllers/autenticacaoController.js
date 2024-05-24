require('dotenv').config() //Importo o env porque precisarei da senha de JWT_SECRET para criptografia
const Usuario = require('../models/Usuario')
const bcrypt = require('bcrypt')//importo para criptografar a senha
const jwt = require('jsonwebtoken') //importo para gerar token


//Agora importo o meu JWT_SECRET do meu arquivo .env

const JWT_SECRET = process.env.JWT_SECRET

//Função para registrar usuários

async function registrar(req, res){
    const {nome, email, senha} = req.body //O usuário me manda uma requisição POST com nome, senha, email

    const usuarioEXISTE = await Usuario.findOne( {email} ) //Procuro se o email do usuário já existe
    
    //Faço uma verificação 
    
    if(usuarioEXISTE){
        
        //se o usuário existir, não será permitido outro cadastro com o mesmo email
       
        return res.status(400).json({mensagem:"Usuário já existe!"}) //Dou um return para a função parar aqui
    }

    //Caso o usuário não exista

    const hash = await bcrypt.hash(senha, 10) //meu hash é minha criptografia, senha será passada pelo usuário, e 10 serão os números de caracteres que entraram na criptografia junto com a senha do usuário

    //Feito a criptografia, será feito o registro do usuário

    const usuario = new Usuario(
        {
            nome, //será registrado o nome passado pelo usuário em requisição
            email, //será registrado o email passado pelo usuário em requisição
            senha: hash //será registrada senha passado pelo usuário em requisição, mas criptografada por nosso hash

    }

)

//Por fim salvamos nosso usuário

await usuario.save() //não precisamos guardar em uma const porque não retornaremos este valor para o usuário

res.status(201).json({mensagem:"Usuário cadastrado com sucesso!"})


}


//Função para logar usuário


async function login(req, res){
    const {email, senha} = req.body //O usuário me manda uma requisição POST com email, senha
    const usuario = await Usuario.findOne( {email} ) //Procuro se o emai do usuário já existe

    //Se o usuário não existir

    if(!usuario){
        //Recuso seu login
       return res.status(401).json({mensagem:"Usuário não cadastrados!!"})
    }

    //Se o usuário existir

    const senhaVALIDA = await bcrypt.compare(senha, usuario.senha) //Comparo para ver se a senha que o usuário me passou bate com a senha do usuário cadastrado

    //Se a senha não for válida
    if(!senhaVALIDA){
        return res.status(401).json({mensagem:"usuário ou senha inválidos!"})

    }

    //Se for válida
    //Irá logar com o email do usuário, acessará a nossa senha de criptografia, e expirará o token a cada 10 minutos
    const token = jwt.sign( {email: usuario.email}, JWT_SECRET, { expiresIn: '1h'} )

    res.json(
        {
            mensagem:"Login efetuado com sucesso!",
            token
        }
    )

}

//E por fim exporto minhas duas funções de registrar e logar

module.exports = {
    registrar,
    login
}

//Exporto as funções para usar em minhas rotas de autenticação /auth/cadastrar e auth/login



