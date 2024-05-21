require('dotenv').config() //chamo o env porque iremos pegar o nosso secret que está lá no env

const Usuario = require('../models/Usuario')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const JWT_SECRET = process.env.JWT_SECRET //pego meu secret que será usado para criptografar


//Métodos

async function registrar(req, res){
   const {nome, email, senha} = req.body
   
   const usuarioExiste = await Usuario.findOne( { email } ) //Busca um usuário com o email passado
   
   if(usuarioExiste){
    return res.status(400).json({mensagem:"Usuário já existe!"})
   }

   const hash = await bcrypt.hash(senha, 10) //senha do usuário e 10 = número de caracteres que criptografaram a senha

   const usuario = new Usuario({
       nome,
       email,
       senha: hash


   })

   await usuario.save() //agora salvamos o usuário, não preciso criar uma const porque não irei retornar usuario para o usuário

   res.status(201).json({mensagem:"Usuário cadastrado com sucesso!"})


   









}


async function login(req, res){
    const {email, senha} = req.body

    const usuario = await Usuario.findOne( {email} )

    //Se eu não encontrar usuário
    if(!usuario){
        res.status(401).json({mensagem:"Não autorizado!"})
    }

    const senhaValida =  await bcrypt.compare(senha, usuario.senha) //compara a senha  que o usuário me passou, e me devolve como true or false como resposta

     if(!senhaValida){
        res.status(401).json({mensagem:"Usuário ou senha inválidos!"})
     }

     const token = jwt.sign({email: usuario.email}, JWT_SECRET, { expiresIn: '10m'})


   }



module.exports = {
    registrar,
    login

}