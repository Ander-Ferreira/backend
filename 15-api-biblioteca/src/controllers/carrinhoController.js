const Carrinho = require('../models/Carrinho')
const Usuario = require('../models/Usuario')

async function create(req, res) {
  try {
    const { usuarioId, produtoId, quantidade, nome, preco } = req.body

    //Não descomente se eu esqueci de comentários assim, eram testes que fui fazendo ao longo do código
    /*if (!usuarioId) {
      return res.status(400).send("usuarioId is required")
    }*/

    // Verifica se o usuário existe
    const usuario = await Usuario.findById(usuarioId)

    if (!usuario) {
      return res.status(404).send("Usuário não encontrado!")
    }

    // Procura o carrinho existente para o usuário
    let carrinho = await Carrinho.findOne({ usuarioId })

    if (carrinho) {
      // Carrinho existe para o usuário
      let itemIndex = carrinho.produtos.findIndex(p => p.produtoId.equals(produtoId))

      if (itemIndex > -1) {
        // Produto existe no carrinho, atualiza a quantidade
        let produtoItem = carrinho.produtos[itemIndex]
        produtoItem.quantidade = quantidade
        carrinho.produtos[itemIndex] = produtoItem
      } else {
        // Produto não existe no carrinho, adiciona novo item
        carrinho.produtos.push({ produtoId, quantidade, nome, preco })
      }

      carrinho = await carrinho.save()
      return res.status(201).send(carrinho)
    } else {
      // Não existe carrinho para o usuário, cria novo carrinho
      const newCarrinho = new Carrinho({
        usuarioId,
        produtos: [{ produtoId, quantidade, nome, preco }]
      })

      await newCarrinho.save()
      return res.status(201).send(newCarrinho)
    }
  } catch (err) {
    console.log(err)
    return res.status(500).send("Algo deu errado!")
  }
}

module.exports = {
  create
}

//exporto para meu arquivo de rotas

//Formato da sua requisição do postman
/*
{    
    "produtoId": "6654d77e7e64484f98d4dea8",
    "quantidade": 3,
    "nome": "Senhor dos Anéis",
    "preco": 154.40
}
*/