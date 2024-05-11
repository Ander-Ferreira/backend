//Importamos a biblioteca do mongoose 
const mongoose = require('mongoose')

//Agora configuraremos nossa colection
const schema = new mongoose.Schema(

    {

        nome: {
            type: String,
            required: true //true para campo obrigatório e false para campo opcional

        },



    },

    {
        timestamps: true //mostra a data que foi registrado no banco de dados
    }


)

//Agora daremos o nome da colection em nosso banco de dados juntamente 
//com nosso schema que será usado, neste caso será 'cargo'

const Cargo = mongoose.model('cargo', schema)


//Por fim exportamos o Cargo, não esqueça

module.exports = Cargo




