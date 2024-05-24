const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    
    {
        nome:{
            type:String,
            required:true
        },

                     
         email:{
            type:String,
            lowercase:true,
            trim:true, //trim remove todos os espaços em brancos do inicio ao fim de uma string, para evitar que o email seja salvo com espaços
            unique:true

        }

        
        
        

        

        


},

{
    timestamps:true
}

)

const Alunos = mongoose.model('alunos', schema)

module.exports = Alunos

//Exportaremos Alunos para nossos controllers