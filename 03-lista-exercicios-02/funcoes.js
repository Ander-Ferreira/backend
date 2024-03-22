/*
1. Faça uma api para calcular o estoque médio de uma peça, 
sendo que ESTOQUE MÉDIO = (QUANTIDADE MÍNIMA + QUANTIDADE MÁXIMA) /2.
*/

function exercicio1(minima, maxima) {
    
    const media = (minima + maxima) / 2
    return media
    
}


/*
2. Uma empresa decide dar um aumento de 30% aos funcionários cujo salário é inferior a 1.000 reais. 
Escreva uma api que receba o salário de um funcionário e imprima o valor do salário reajustado ou uma mensagem caso o funcionário não tenha direito ao aumento.

*/

function exercicio2(salario){
    if(salario < 1000){
        
        const reajuste = ((salario * 30)/100) + salario
        return `Seu salário com reajuste de 30% fica ${reajuste}`

    }
    else{
        return `Você não tem direito ao reajuste`
    }

}



/*
3. Escrever uma api que lê o nome de um vendedor, o seu salário fixo, o total de vendas por ele efetuadas 
e o percentual que ganha sobre o total de vendas. Calcular o salário total do vendedor. 
Escrever o nome do vendedor e seu salário total.
*/
function exercicio3(nome, salario, totalVendas, percentual){
    percentual = 30
    const reajuste = ((percentual * totalVendas) / 100) + salario
    return `Olá ${nome}, seu salário era ${salario}, e agora ficou ${reajuste}`
    
}


/*
4. Faça uma api que leia o nome de um piloto, uma distância percorrida em km e o tempo que o piloto levou para percorrê-la (em horas). O programa deve calcular a velocidade média - Velocidade = Distância / Tempo - em km/h, e exibir a seguinte frase: A velocidade média do <nome do piloto> foi <velocidade media calculada> km/h.
*/



function exercicio4(nome, distancia, tempoHoras) {
    
    
    tempoHoras = parseFloat(tempoHoras);
    
    const velocidade = distancia / tempoHoras;

    return `Olá ${nome}, sua velocidade média foi ${velocidade} km/h`;
}






/*
5. Faça uma api que calcule e imprima o salário reajustado de um funcionário de acordo com a seguinte regra:
    • Salários até 2.000, reajuste de 50%
    • Salários maiores que 2.000, reajuste de 30%
*/

function exercicio5(salario){
    if(salario <= 2000) {
        let reajuste = ((salario * 50) / 100) + salario
        return `Seu salário com reajuste de 30% é ${reajuste}`
    }

    else{
        let reajuste = ((salario * 30) / 100) + salario
        return `Seu salário com reajuste de 30% é ${reajuste}`
    }


}




module.exports = {
    exercicio1, exercicio2, exercicio3, exercicio4, exercicio5
}