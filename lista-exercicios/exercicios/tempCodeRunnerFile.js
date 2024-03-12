/* 6. Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele efetuadas. Escrever um script que leia o número de carros por ele vendidos, o valor total de suas vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor. */

let prompt = require('prompt-sync')();

let salario = Number(prompt('Digite o seu salário atual: '))

let comissaoFixa = 0.1

let valorCarro = 25000

let carrosVendidos = Number(prompt('Digite o número de carros que vendeu: '))

const salarioFunci = function(valorTotalVendas, salarioTotal, valorSeparado, comissaoDe5){


    console.log(`Você vendeu um total de ${carrosVendidos}, custando ${valorCarro} cada.`)
    
    valorTotalVendas = valorCarro * carrosVendidos

    comissaoDe5 = (valorTotalVendas * 5) / 100

    console.log(`Seu valor de vendas totais foi de: ${valorTotalVendas.toFixed(2)}`)

    
    salarioTotal = (comissaoFixa * carrosVendidos) + (comissaoDe5 + salario)

    //console.log(salarioTotal.toFixed(2))

    valorSeparado = (carrosVendidos / salarioTotal) + (comissaoFixa * 100)

    
    console.log(`Seu salário fixo atual é de ${salario}, com um percentual de ${(valorSeparado).toFixed(2)}% por carro vendido, com um adicinal de 5% (${comissaoDe5}) sobre o total do valor das vendas dos carros, salário ficará ${salarioTotal}`)
    
    //Erro de interpretação, refiz parte do código.
    
    



}

salarioFunci()





