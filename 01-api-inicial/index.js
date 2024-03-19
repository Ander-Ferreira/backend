
//Criando uma instância do módulo express
const express = require('express')

//Criando nossa aplicação
const app = express()

//Definindo o caminho da aplicação
app.get('/', (requisicao, resposta) =>{
    resposta.send('Olá')

} )


//Executando a aplicação na porta definida
app.get('/hello', (requisicao, resposta) => {
    resposta.send('hello world')


})

app.get('/nome', (requisicao, resposta) => {
    resposta.send('Anderson')
    
})

/*
app.get('/exercicio1/:nota1/:nota2/:nota3/:nota4', (requisicao, resposta)=> {
     
    const nota1 = Number((requisicao.params.nota1))
    const nota2 = Number((requisicao.params.nota2))
    const nota3 = Number((requisicao.params.nota3))
    const nota4 = Number((requisicao.params.nota4))

    const media = (nota1 + nota2 + nota3 + nota4) / 4

    const mensagem = media >= 7 ? 'Aprovado ': 'Reprovado' //Operação ternária, é como um atalho para o if : else
    
    console.log(requisicao.params)
    
    resposta.send(`${media} Aluno ${mensagem}`)

   
})

*/


app.post('/teste', (requisicao, resposta) => {
    resposta.send('Teste de POST')
    
})




//npm install express --save
//npm install nodemon 
//npm start para rodar o projeto
//preciso adicionar no package.json esta linha "start": "nodemon", 


//Crie um end point que devolva seu nome e matricula


//Path params

app.get('/aluno/:matricula/:curso', (requisicao, resposta) => {
    console.log(requisicao.params)
    resposta.send(`
    Olá Anderson,
    sua matrícula é ${requisicao.params.curso}`)

     


})


//Query Params é para muitos dados

//Exemplo: http://localhost:3000/pessoa?nome=Anderson&idade=90&telefone=191

app.get('/pessoa', (requisicao, resposta) =>{
    console.log(requisicao.query)
    resposta.send('OK')


})


/*1. Faça um Programa que receba quatro notas de um aluno, calcule e imprima 
a média aritmética das notas e a mensagem de aprovado para média superior 
ou igual a 7.0 ou a mensagem de reprovado para média inferior a 7.0.*/


/*
app.get('exercicio1/:nota1/:nota2/:nota3/:nota4', (requisicao, resposta) =>{

const nota1 = Number(requisicao.query)
const nota2 = Number(requisicao.query)
const nota3 = Number(requisicao.query)
const nota4 = Number(requisicao.query)

let media = (nota1 + nota2 + nota3 + nota4) / 4
console.log(requisicao.query)
requisicao.send(media)

})

*/


app.listen(3000, () => {
    console.log('Api iniciada! Rodando em http://localhost:3000') 


})

//Exercicio 01 modo query.params

app.get('/exercicio1', (requisicao, resposta) =>{

    console.log(requisicao.query)

    const nota1 = Number(requisicao.query)
    const nota2 = Number(requisicao.query)
    const nota3 = Number(requisicao.query)
    const nota4 = Number(requisicao.query)

    let media = (nota1 + nota2 + nota3 + nota4) / 4

    const mensagem = media >= 7 ? 'Aprovado': 'Reprovado'

    resposta.send(`media: ${media},
    mensagem:${mensagem}`)
})
