const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    }
 },

 {
    timestamps: true
 }

)


const Cargo = mongoose.model('Cargo', schema)

module.exports = Cargo