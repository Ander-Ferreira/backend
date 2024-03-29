
const express = require('express')
const app = express()


//middlewares -> intermediários
app.use(express.json())







//lógica -> meu contrato com os exercícios

//1. Faça uma api para calcular o estoque médio de uma peça, sendo que ESTOQUE MÉDIO = (QUANTIDADE MÍNIMA + QUANTIDADE MÁXIMA) /2.

//Via path param

app.get('/exercicio1/:qtdMinima/:qtdMaxima', (requisicao, resposta)=>{

    const quantidadeMinima = Number(requisicao.params.quantidadeMinima)
    const quantidadeMaxima = Number(requisicao.params.quantidadeMaxima)
   
    console.log(requisicao.params) //para imprimir o que está chegando para mim no terminal
   
    const estoqueMedio = (quantidadeMinima + quantidadeMaxima) / 2

    resposta.send(`o estoque medio é de ${estoqueMedio}`)



})



//Via PARAM-QUERY
app.get('/exercicio1', (requisicao, resposta) => {
    
    const quantidadeMinima = Number(requisicao.query.quantidadeMinima)
    const quantidadeMaxima = Number(requisicao.query.quantidadeMaxima)
   
    console.log(requisicao.query) //para imprimir o que está chegando para mim no terminal
   
    const estoqueMedio = (quantidadeMinima + quantidadeMaxima) / 2

    resposta.send(`o estoque medio é de ${estoqueMedio}`)

})


//body, raw no postman e faço um objeto

app.post('/exercicio1', (requisicao, resposta) => {

    
    const qtdMinima = requisicao.body.qtdMinima
    const qtdMaxima = requisicao.body.qtdMaxima


    
    const estoqueMedio2 = (qtdMinima + qtdMaxima) / 2
    
    console.log(requisicao.body) //imprimo o conteúdo enviado do postman no console
     
    resposta.send(estoqueMedio2)

    

})



app.post("/exercicio7", (req, res)=>{

const corpo = req.body
let listaProdutos = []

corpo.forEach(produto => {
    listaProdutos.push(produto)
}) //forEach é um laço for que irá percorrer toda a aplicação, "produto" irá percorrer o array

let soma = 0
listaProdutos.forEach(produto => {
    soma = soma + produto.preco //produto.preco soma os valores da array
})

const media = soma / listaProdutos.length

//const maior = Math.max.apply(null, listaProdutos.map(produto => produto.preco))

listaProdutos.forEach(produto => {

  if(produto.preco > maiorPreco){
    maiorPreco = produto.preco
  }


})

const resultado = {
    precoMedio: media.toFixed(2),
    maiorPreco: maiorPreco
}





res.json(resultado) //envia o objeto em forma de json




})

//start da aplicação

app.listen(3000, () => {
    console.log('Aplicação iniciada em http://localhost:3000')
})
