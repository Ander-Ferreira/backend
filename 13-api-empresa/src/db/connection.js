//Importamos o moongose, toda vez que formos mecher com algo do banco de dados, importamos a biblioteca moongose
const mongoose = require('mongoose')
//Importamos o dotenv para conseguirmos acessar as variáveis de acesso do nosso banco de dados que criamos no arquivo .env
require('dotenv').config()


//Agora importamos nossas variáveis do arquivo .env
const DB_USERNAME = process.env.DB_USERNAME
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_HOST = process.env.DB_HOST
const DB_NAME = process.env.DB_NAME

//Agora criamos uma função para conectar ao nosso banco de dados

function main(){
    //mongoose.connect para conectar ao nosso banco de dados, e logo em seguida pegue o link de acesso de seu banco no mongodb
    //Após isso troque os campos que possuem seu login, password, link do seu db, e substitua o nome de sua api por sua variável de nome

    mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`)
    .then(()=>{ 
        console.log('Conectado ao banco de dados!')
    })
    .catch(error => console.log('Erro ao conectar banco de dados!', error))
}


//Por fim, exporte a função


module.exports = main

//Usaremos o main lá no nosso index.js para realizar a conexão com nosso banco de dados