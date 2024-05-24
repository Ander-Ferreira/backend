require('dotenv').config() // Importa variáveis de ambiente do arquivo .env
const Usuario = require('../models/Usuario')
const bcrypt = require('bcrypt') // Importa para criptografar a senha
const jwt = require('jsonwebtoken') // Importa para gerar token
const nodemailer = require('nodemailer') // Biblioteca que mandará um email de boas-vindas para quem se registrou

// Agora importo o meu JWT_SECRET do meu arquivo .env
const JWT_SECRET = process.env.JWT_SECRET

// Função para registrar usurios
async function registrar(req, res) {
    // O usuário me manda uma requisição POST com nome, senha, email
    const { nome, email, senha } = req.body 

    // Procuro se o email do usuário já existe
    const usuarioEXISTE = await Usuario.findOne({ email }) 
    
    
    // Faço uma verificação 
    if (usuarioEXISTE) {
       
        // Se o usuário existir, não será permitido outro cadastro com o mesmo email
       
       
     return res.status(400).json({ mensagem: "Usuário já existe!" }) // Dou um return para a função parar aqui
    }

    
    // Caso o usuário não exista
    const hash = await bcrypt.hash(senha, 10) // Criptografia da senha

    
    
    // Feito a criptografia, será feito o registro do usuário
    const usuario = new Usuario({
        nome, // Registrado o nome passado pelo usuário em requisição
        email, // Registrado o email passado pelo usuário em requisição
        senha: hash // Registrada senha passada pelo usuário em requisição, mas criptografada
    })


    // Por fim salvamos nosso usuário
    await usuario.save() // Não precisamos guardar em uma const porque não retornaremos este valor para o usuário


    // Com o usuário devidamente registrado, agora usaremos o nodemailer para enviar um email de boas-vindas.

//API NOSSA MINI API DE ENVIAR EMAIL É AQUI QUE A MAGIA ACONTECE

    const transporter = nodemailer.createTransport({
        host: "smtp-mail.outlook.com",
        port: 587,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    })

    try {
        await transporter.sendMail({
            //Atenção, gmail precisa ter uma autenticação de 2 fatores, recomendo usar o outlook em EMAIL_USER no seu .env
            from: process.env.EMAIL_USER, //Pegamos o email que colocamos no arquivo .env (NÃO ESQUEÇA DA SENHA)
            to: email, // Envia o e-mail para o novo usuário registrado
            subject: "Seja bem-vindo!",
            text: "Olá, sou seu colega Anderson, desculpe o email estranho. Este é um email de teste simples para confirmar que a API está funcionando e que foi integrada. Espero que isso te dê um norte para realizar o trabalho de backend que foi passado! Esta api está usando o pacote nodemailer, estarei subindo esta aplicação e anotações de como implementá-la no meu github logo mais."
        })
        res.status(201).json({ mensagem: "Usuário cadastrado com sucesso!" })
    } catch (error) {
        console.error('Erro ao enviar email!', error)
        res.status(500).json({ mensagem: "Erro ao enviar email de boas-vindas" })
    }
}

// Função para logar usuário

async function login(req, res) {
    const { email, senha } = req.body // O usuário me manda uma requisição POST com email, senha
    const usuario = await Usuario.findOne({ email }) // Procuro se o email do usuário já existe

    // Se o usuário não existir
    
    if (!usuario) {
        // Recuso seu login
        return res.status(401).json({ mensagem: "Usuário não cadastrado!" })
    }

    // Se o usuário existir
    const senhaVALIDA = await bcrypt.compare(senha, usuario.senha) // Compara para ver se a senha passada pelo usuário bate com a senha cadastrada

    // Se a senha não for válida
    if (!senhaVALIDA) {
        return res.status(401).json({ mensagem: "Usuário ou senha inválidos!" })
    }

    // Se for valida
    // Irá logar com o email do usuario, acessará a nossa senha de criptografia, e expirará o token a cada 1 hora
    const token = jwt.sign({ email: usuario.email }, JWT_SECRET, { expiresIn: '1h' })

    res.json({
        mensagem: "Login efetuado com sucesso!",
        token
    })
}

// Exporto minhas duas funções de registrar e logar
module.exports = {
    registrar,
    login
}

// Exporto as funções para usar em minhas rotas de autenticação /auth/cadastrar e /auth/login
