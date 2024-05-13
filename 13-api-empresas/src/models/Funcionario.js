const mongoose = require('mongoose')

const schema = new mongoose.Schema(

    {
        nome:{
            type:String,
            required:true,
            
        },

        dataNascimento:{
            type:String,
            required:true,
            lowercase:true,
            trim:true,
            unique:true
        },

        cargo:{
            type: mongoose.SchemaTypes.ObjectId, //Aqui digo que este campo vai requer um id na requisição 
            ref:'cargo',
            required:false

        }





    },

    {
      
        timestamps:true

    }

)


const Funcionario = mongoose.model('funcionarios', schema)


module.exports = Funcionario