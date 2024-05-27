require('dotenv').config()
const mongoose = require('mongoose')

//Importação do dotenv
const DB_USERNAME = process.env.DB_USERNAME
const DB_PASSWORD= process.env.DB_PASSWORD
const DB_HOST= process.env.DB_HOST
const DB_NAME= process.env.DB_NAME


//Função de conexão do banco de dados

function main(){

    mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`)
    .then(()=>{ 
        console.log('Conectado ao banco de dados!')
    })
    .catch(error => console.log('Erro ao conectar banco de dados!', error))
}


module.exports = main
//Vamos usar no index


