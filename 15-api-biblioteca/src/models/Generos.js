const mongoose = require('mongoose')

const generoSchema = new mongoose.Schema({

     acao:{
        type: String,
        required: false
     },
     aventura:{
        type: String,
        required: false
     },
     comedia:{
        type: String,
        required: false
     },
     fantasia:{
        type: String,
        required: false
     },
     romance:{
        type: String,
        required: false
     }
   
},

{
    timestamps: true
}

)


const Generos = mongoose.model('genero', generoSchema)


module.exports = Generos
//Exporto para meus generosControllers