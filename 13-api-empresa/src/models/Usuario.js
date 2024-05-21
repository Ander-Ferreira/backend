const mongoose = require('mongoose')

<<<<<<< HEAD
const schema = new mongoose.Schema(
    {

        nome:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        senha:{
            type:String,
            required:true
        }
=======
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
>>>>>>> 21d003b57a51d15eb5f543a2d842808df2317d80

},

{
<<<<<<< HEAD
    timestamps: true
}

)

const Usuario = mongoose.model('usuario', schema)


module.exports = Usuario

//Exporto esse usuário para usar em meu controller de autenticação, autenticacaoController.js
=======
    timestamps:true
}


)

//Agora criamos o nosso modelo no banco de dados

const Usuario = mongoose.model('usuario', schema)


//Por fim exportamos

module.exports = Usuario

//Usaremos esse Cargo que exportamos para criar nossos controladores (controllers)
//Nossas futuras funções de crud

>>>>>>> 21d003b57a51d15eb5f543a2d842808df2317d80
