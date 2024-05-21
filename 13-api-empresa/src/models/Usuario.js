const mongoose = require('mongoose')

//Agora faremos nosso esquema (schema) do nosso banco de dados
//O esquema se resume em como nosso banco de dados será organizado, como campos de chaves e valores

const schema = new mongoose.Schema(
    {

    nome:{
        type:String,
        required:true  //required:true toda vez que quero que um campo seja obrigatóriamente preenchido, caso contrário é false

    },
    email:{
        type:String,
        required:false
    },
    senha:{
        type:String,
        required:true
    }

},

{
    timestamps:true
}


)

//Agora criamos o nosso modelo no banco de dados

const Usuario = mongoose.model('usuario', schema)


//Por fim exportamos

module.exports = Usuario

//Usaremos esse Cargo que exportamos para criar nossos controladores (controllers)
//Nossas futuras funções de crud

