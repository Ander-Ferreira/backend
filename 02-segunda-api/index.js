const express = require('express')
const app = express()
const port = 3000

//Middleware = intermediário
//https://expressjs.com/pt-br/guide/writing-middleware.html

app.use((requisicao, resposta, next) =>{
    console.log('Passou no intermediário')
    console.log('Data: ' + Date.now()) //devolve o dia e a hora de agora
    next()

})


app.use(express.json()) //transforma o json em java script que vem lá do body do postman

app.get('/', (requisicao, resposta) => {
    resposta.send('hello world') 
     
}) 

app.post('/aluno', (requisicao, resposta) =>{
    console.log(requisicao.body) //imprime as informações passadas na requisição do body do postman pelo método post
    resposta.send('Ok')
})


app.listen(port, () => {
    console.log(`Aplicação iniciada em http://localhost:3000  ${port}`)
  })
