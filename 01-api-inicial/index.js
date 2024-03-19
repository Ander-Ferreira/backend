
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


//Exercicio 01 modo query.params

//Chamando no postman http://localhost:3000/exercicio1?nota1=5&nota2=3&nota4=3

app.get('/exercicio1', (requisicao, resposta) =>{

    console.log(requisicao.query)

    const nota1 = Number(requisicao.query.nota1)
    const nota2 = Number(requisicao.query.nota2)
    const nota3 = Number(requisicao.query.nota3)
    const nota4 = Number(requisicao.query.nota4)

    let media = (nota1 + nota2 + nota3 + nota4) / 4

    const mensagem = media >= 7 ? 'Aprovado': 'Reprovado'

    resposta.send(`media: ${media},
    mensagem:${mensagem}`)
})

/*2. Escreva um script para ler o número total de eleitores de um município, 
o número de votos brancos, nulos e válidos. Calcular e escrever o percentual 
que cada um representa em relação ao total de eleitores. */

app.get('/eleicao', (requisicao, resposta) => {
    console.log(resposta.query) //exibe minha resposta com a query no terminal, só serve para isso, testei.
    
    const votosBrancos = Number(requisicao.query.votosBrancos) //transformo a query em Number para não dar NaN
    const votosNulos = Number(requisicao.query.votosNulos)
    const votosValidos = Number(requisicao.query.votosValidos)

    const total = votosBrancos + votosNulos + votosValidos
        
    
    //Calculando o percentual
    const percentual = (votosValidos * total) / 100
    const percentual2 = (votosNulos * total) / 100
    const percentual3 = (votosBrancos * total) / 100
    
    //Preciso jogar todo o resultado em uma resposta.send só, se eu colocar mais de uma resposta.send, só vai pegar uma
    resposta.send(`Os votos totais são ${total}%,<br>
            Os votos Válidos são ${percentual}%,<br>
            Os votos Nulos são ${percentual2}%,<br>
            Os votos Brancos são ${percentual3}%`)
    
})


/*3. Escreva um script para ler o salário mensal atual de um funcionário e o percentual de reajuste. 
Calcular e escrever o valor do novo salário.
*/

app.get('/exercicio3', (requisicao, resposta) => {
    console.log(resposta.query)

    const salario = Number(requisicao.query.salario)
    const reajuste = Number(requisicao.query.reajuste)
    const total = ((salario * reajuste) / 100) + salario

    resposta.send(`Seu salário era ${salario},<br>
                depois de ${reajuste}%,
                ficou ${total}`)

})

/*
4. O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%,
escrever um script para ler o custo de fábrica de um carro, calcular e escrever o custo final ao consumidor.
*/

app.get('/exercicio4', (requisicao, resposta) => {

    console.log(resposta.query)

    const custoFabrica = Number(requisicao.query.custoFabrica)
    const imposto = 45
    const distribuidor = 28

    const custoFinal = (((imposto + distribuidor) * custoFabrica) / 100) + custoFabrica

    resposta.send(`O custo de fábrica de seu carro é ${custoFabrica},<br>
                 Com ${imposto}% + ${distribuidor}%,<br>
                 ficará ${custoFinal}`)

})



/*5. O custo de um carro novo ao consumidor é a soma do custo de fábrica com
a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). 
Escreva um script para ler o custo de fábrica de um carro, a porcentagem do 
distribuidor e o imposto, e calcular e escrever o custo final ao consumidor*/
//Amanhã continuo em um arquivo diferente

app.get('/exercicio5', (requisicao, resposta) => {
    
    console.log(resposta.query)
    
    const custoFab = Number(requisicao.query.custoFab)
    const imp = Number(requisicao.query.imp)
    const distri = Number(requisicao.query.distri)

    const tudo = ((imp + distri) * custoFab / 100) + custoFab

    resposta.send(`O custo de fábrica de seu veículo é de ${custoFab}, com ${imp}% de imposto + <br>
                 ${distri}% de taxa de distribuição, <br>
                 o valor final fica ${tudo}`)

})







app.listen(3000, () => {
    console.log('Api iniciada! Rodando em http://localhost:3000') 


})
