//Importaremos o mongoose porque estaremos usando o mongoDB
const mongoose = require('mongoose')

//Agora importamos a biblioteca do dotenv para utilizarmos os dados do nosso arquivo .env
require('dotenv').config()

//Agora importo o usuário, senha, endereço do host e nome do banco de dados do nosso .env com variáveis

const DB_USERNAME = process.env.DB_USERNAME
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_HOST = process.env.DB_HOST
const DB_NAME = process.env.DB_NAME

//Agora criamos uma conexão com nosso banco de dados com o endereço que pegamos diretamente no mongoDB

//Lembre de subestituir os capos com DB_NAME, DB_PASSWORD, DB_HOST e DB_NAME
function main() {
    mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority&appName=Minhaapi`)
    .then(()=>{
        console.log('Conectado ao Banco de dados com sucesso com sucesso!')
    })
    .catch(error=>{
        console.log('Aconteceu um erro ao acessar o banco de dados', error)
    })
    
}

module.exports = main




