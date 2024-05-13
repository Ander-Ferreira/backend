const mongoose = require('mongoose')

//Agora vamos criar uma estrutura para o nosso banco de dados, um esquema (schema)

const schema = new mongoose.Schema(

    {
        
        nome: {
            
            type:String,
            required: true


        }
    


    },

    {

        timestamps: true

    }

)

//Vamos criar a nossa collection no banco de dados

const Cargo = mongoose.model('cargo', schema)


//Por último a gente exporta

module.exports = Cargo 

