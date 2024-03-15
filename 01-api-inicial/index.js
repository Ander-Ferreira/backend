
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

app.post('/teste', (requisicao, resposta) => {
    resposta.send('Teste de POST')
    
})



app.listen(3000, () => {
    console.log('Api iniciada! Rodando em http://localhost:3000') 


})

//npm install express --save
//npm install nodemon 
//npm start para rodar o projeto
//preciso adicionar no package.json esta linha "start": "nodemon", 
