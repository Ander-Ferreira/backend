const mongoose = require('mongoose')

const schemaAgendar = new mongoose.Schema({

    nome:{
        type:String,
        required: true

    },

    email:{
        type:String,
        required: true


    }

},


{

    timestamps: true



}

)


const Agendamento = mongoose.model('agendamento', schemaAgendar)


module.exports = Agendamento