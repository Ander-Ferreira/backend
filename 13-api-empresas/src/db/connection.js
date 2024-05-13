//Toda vez que formos mecher com mongoDB importamos a biblioteca mongoose
const mongoose = require('mongoose')
//Segunda coisa, importar a biblioteca do dotenv para importarmos as variáveis de env
require('dotenv').config()

//Depois invocamos as variáveis que criamos no arquivo .env, invocamos com constantes

const DB_USERNAME = process.env.DB_USERNAME
const DB_PASSOWORD = process.env.DB_PASSOWORD
const DB_HOST = process.env.DB_HOST
const DB_NAME = process.env.DB_NAME

//Agora faremos a conexão com nosso banco de dados usando os dados que importamos, e o link que pegamos
//lá no mongoDB

function main(){
     
     mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSOWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`)
     
     .then(()=>{
        console.log('Conectado ao banco de dados com sucesso')
     })
     
     .catch(error => console.log('Erro ao conectar o banco de dados!', error))
    
     
     


}

//Por último exportamos a nossa função para usarmos lá no index.js
module.exports = main

