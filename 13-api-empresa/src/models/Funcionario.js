const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    
    {
        nome:{
            type:String,
            required:true
        },

        cpf:{
            type:String,
            required:true
        },

              
        dataNascimento:{
            type:Date,
            required:true
        },
        email:{
            type:String,
            lowercase:true,
            trim:true, //trim remove todos os espaços em brancos do inicio ao fim de uma string, para evitar que o email seja salvo com espaços
            unique:true

        },

        telefone:{
            type:String,
            required:true


        },
        dataContratos:{
            type:Date,
            required:true

        },
        genero:{
            type:String,
            required:true

        },

        endereco:{
            cep:String,
            logradouro:String,
            complemento:String,
            bairro:String,
            localidade:String,
            uf:String,
            numero:String
        },

        cargo:{
            type:mongoose.SchemaTypes.ObjectId, //No tipo colocamos que queremos o id de um esquema do mongoose que criamos
            ref:'cargo', //Em ref colocamos uma referência, ou seja, o nome do que demos ao nosso modelo lá em models
            required:false //assim quando formos registrar funcionário não precisarei já ter um cargo para ele
        },
        departamento:{
            type:mongoose.SchemaTypes.ObjectId, 
            ref:'departamento', 
            required:false 
        }



},

{
    timestamps:true
}

)

const Funcionario = mongoose.model('funcionario', schema)

module.exports = Funcionario

//Exportaremos Funcionario para nossos controllers