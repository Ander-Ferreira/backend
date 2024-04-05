const express = require('express')
const app = express()
const port = 3000
const funcoes = require('./funcoes')

//Middlewares
app.use(express.json())

//----------------------------------------------------------------------------------------

/*
1. Faça uma api para calcular o estoque médio de uma peça, 
sendo que ESTOQUE MÉDIO = (QUANTIDADE MÍNIMA + QUANTIDADE MÁXIMA) /2.
*/

/*
Postman: http://localhost:3000/exercicio1
{
    "minima": 20,
    "maxima": 40
}


*/

app.post('/exercicio1', (req, res)=>{
    
    const minima = req.body.minima
    const maxima = req.body.maxima
    const media = funcoes.exercicio1(minima, maxima)
    
    res.send(`O estoque médio é de ${media}`)


})

//----------------------------------------------------------------------------------------

/*
2. Uma empresa decide dar um aumento de 30% aos funcionários cujo salário é inferior a 1.000 reais. 
Escreva uma api que receba o salário de um funcionário e imprima o valor do salário reajustado ou uma mensagem caso o funcionário não tenha direito ao aumento.
*/

app.post('/exercicio2', (req, res)=>{
    const salario = req.body.salario
    const saidaExercicio2 = funcoes.exercicio2(salario)

    res.send(saidaExercicio2)



})

//----------------------------------------------------------------------------------------

/*
3. Escrever uma api que lê o nome de um vendedor, o seu salário fixo, o total de vendas por ele efetuadas 
e o percentual que ganha sobre o total de vendas. Calcular o salário total do vendedor. 
Escrever o nome do vendedor e seu salário total.
*/

app.post('/exercicio3', (req, res)=>{
    const nome = req.body.nome
    const salario = req.body.salario
    const totalVendas = req.body.totalVendas

    const saidaExercicio3 = funcoes.exercicio3(nome, salario, totalVendas)
    res.send(saidaExercicio3)

})


//----------------------------------------------------------------------------------------

/*
4. Faça uma api que leia o nome de um piloto, uma distância percorrida em km e o tempo que o piloto levou para percorrê-la (em horas). O programa deve calcular a velocidade média - Velocidade = Distância / Tempo - em km/h, e exibir a seguinte frase: A velocidade média do <nome do piloto> foi <velocidade media calculada> km/h.
*/

app.post('/exercicio4', (req, res) => {
    const nome = req.body.nome;
    const distancia = req.body.distancia;
    const tempoHoras = req.body.tempoHoras;

   
    const saidaExercicio4 = funcoes.exercicio4(nome, distancia, tempoHoras);

    res.send(saidaExercicio4);
});


//----------------------------------------------------------------------------------------

/*
5. Faça uma api que calcule e imprima o salário reajustado de um funcionário de acordo com a seguinte regra:
    • Salários até 2.000, reajuste de 50%
    • Salários maiores que 2.000, reajuste de 30%
*/

app.post('/exercicio5', (req, res)=>{
    const salario = req.body.salario
    const saidaExercicio5 = funcoes.exercicio5(salario)
    res.send(saidaExercicio5)
})

//----------------------------------------------------------------------------------------

/*
6. Construa uma api que calcule o peso ideal de uma pessoa. Dados de entrada: 
altura e sexo. Fórmulas para cálculo do peso:
    • peso ideal de homem = (72,7 x altura) – 58
    • peso ideal da mulher = (62,1 x altura) – 44,7
*/

app.post('/exercicio6', (req, res) =>{
    //sexo use H ou M 
    const altura = req.body.altura
    const sexo = req.body.sexo

    const saidaExercicio6 = funcoes.exercicio6(altura, sexo)
    res.send(saidaExercicio6)


})

//----------------------------------------------------------------------------------------

/*
7. Faça uma api para ler o código e o preço de 15 produtos, calcular e escrever:
    • O maior preço lido; e
    • A média aritmética dos preços dos produtos.
*/
app.post('/exercicio7', (req, res)=>{
    let corpo = req.body
    let listaProdutos = []

    //forEach é um for para arrays, produto é a variável que irá percorrer a array, é como a variável i
    corpo.forEach(produto => {
        listaProdutos.push(produto) //adiciona os valores à array, e produto enquanto percorre a array adicionará o próximo valor à array

    })

    //Somando
    let soma = 0

    listaProdutos.forEach(produto =>{
        soma = soma + produto.preco //somará todos os preços da aba preços: de array
    })

    //Dividindo
    const media = soma / listaProdutos.length

    //Calcular maior preço

    let maiorPreco = 0

    listaProdutos.forEach(produto => {
        if(produto.preco > maiorPreco){
            maiorPreco = produto.preco

        }
    })

    const resultado = {
        precoMedio: media.toFixed(2),
        maiorPreco: maiorPreco
    }

    res.json(resultado)
    
    
    
    })


    /*8. Uma empresa concederá um aumento de salário aos seus funcionários, variável de acordo com o cargo, conforme a tabela abaixo. Faça uma api que leia o salário e o código do cargo de um funcionário e calcule o seu novo salário. Se o cargo do funcionário não estiver na tabela, ele deverá receber 15% de aumento. Mostre o salário antigo, o novo salário e a diferença entre ambos.
Código do Cargo -> Percentual:
    • 101 -> 5%
    • 102 -> 7,5%
    • 103 -> 10%*/

    const arrayDeSalario = []
    let salarioCorrigido = 0

    app.post('/exercicio8', (req, res)=>{
        const requisicao = req.body
        
        requisicao.forEach(navegador =>{
            arrayDeSalario.push(navegador)
        })
        
        arrayDeSalario.forEach(navegador =>{
            
            if (navegador.codigo === 101){
              salarioCorrigido =  (navegador.salario * 0.05) + navegador.salario

            }
        })

        arrayDeSalario.forEach(navegador => {
            if(navegador.codigo === 102){
                salarioCorrigido = (navegador.salario * 0.075) + navegador.salario
            }
        } )

        arrayDeSalario.forEach(navegador => {
            if(navegador.codigo === 103){
                salarioCorrigido = (navegador.salario * 0.1) + navegador.salario
            }
        })
        const saida = {
            salarioCorrigido: salarioCorrigido
        }
        res.json(saida)
    })

    /*
    9. Faça uma api que receba o valor do salário mínimo, o número de horas trabalhadas, o número de dependentes do funcionário e a quantidade de horas extras trabalhadas. Calcule e imprima o salário a receber do funcionário seguindo as regras abaixo:

    •  Valor da hora trabalhada é igual a 1/5 do salário mínimo;
    •  Salário do mês é igual ao número de horas trabalhadas vezes o valor da hora trabalhada;
    •  Para cada dependente acréscimo de 32 reais;
    •  Para cada hora extra trabalhada o cálculo do valor da hora trabalhada acrescida de 50 %;
    •  Salário bruto é igual ao salário do mês mais os valores dos dependentes mais os valores das horas extras;
    •  Cálculo do valor do imposto de renda retido na fonte segue a tabela abaixo:
        IRRF | Salário Bruto
        Isento Inferior a 2.000
        10% De 2.000 a 5.000
        20% Superior a 5.000
    • Salário líquido é igual ao salário bruto menos IRRF;
    • A gratificação segue a próxima tabela:
          Salário Líquido | Gratificações
          Até 3.500 | 1.000 reais
          Superior a 3.500 | 500 reais
    • Salário a receber do funcionário é igual ao salário líquido mais a gratificação.

    */


app.listen(3000, ()=>{
    console.log('aplicação iniciada em http://localhost:3000')
})

