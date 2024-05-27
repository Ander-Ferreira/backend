const mongoose = require('mongoose')

//Crio o esquema de autor

const autorSchema = new mongoose.Schema({

     nome:{
        type: String,
        required: true
     },
     sobre:{
        type: String,
        required: true
     },
     nascionalidade:{
        type: String,
        required: true
     },
     data_nascimento:{
        type: Date,
        required: true
     },
     livros:{
        type: mongoose.SchemaTypes.ObjectId,
        ref:'livro',
        required: false
     }

},

{
    timestamps:true
}

)


const Autor = mongoose.model('autor', autorSchema)


module.exports = Autor
//Exporto para meu autorControllers