const Agendamento = require('../models/Agendamento')
const nodemailer = require('nodemailer')

async function create(req, res) {
    const { nome, email } = req.body

    try {
        
        const novoAgendamento = new Agendamento({ nome, email })
        const agendamentoSalvo = await novoAgendamento.save()

        
        const transporter = nodemailer.createTransport({
            host: "smtp-mail.outlook.com",
            port: 587,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email, 
            subject: "Agendado com sucesso!",
            text: "Olá, sou seu colega Anderson, desculpe o email estranho. Este é um email de teste simples para confirmar que a API está funcionando e que foi integrada. Espero que isso te dê um norte para realizar o trabalho de backend que foi passado! Esta api está usando o pacote nodemailer, estarei subindo esta aplicação e anotações de como implementá-la no meu github logo mais."
        });

        
        res.status(201).json({ mensagem: "Usuário agendado com sucesso!", agendado: agendamentoSalvo })
    } 
    
    catch (error) {
        console.error('Erro ao enviar email!', error)
        res.status(500).json({ mensagem: "Erro ao cadastrar usuário e enviar email de agendamento" })
    }
}

module.exports = { create }