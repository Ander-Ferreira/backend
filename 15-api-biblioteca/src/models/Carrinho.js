const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CarrinhoSchema = new Schema({
  usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
  produtos: [
    {
      produtoId: { type: mongoose.Schema.Types.ObjectId, ref: 'livro', required: true },
      quantidade: { type: Number, required: true },
      nome: { type: String, required: true },
      preco: { type: Number, required: true }
    }
  ]
});

module.exports = mongoose.model('Carrinho', CarrinhoSchema);

//Exporto para usar em meu carrinhoControllers