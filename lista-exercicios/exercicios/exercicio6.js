/* 6. Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele efetuadas. Escrever um script que leia o número de carros por ele vendidos, o valor total de suas vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor. */

let prompt = require('prompt-sync')();

let salario = Number(prompt('Digite o seu salário atual: '))

let comissaoFixa = 0.1

let valorCarro = 25000

let carrosVendidos = Number(prompt('Digite o número de carros que vendeu: '))

const salarioFunci = function(valorTotalVendas, salarioTotal, valorSeparado){


    console.log(`Você vendeu um total de ${carrosVendidos}`)
    
    valorTotalVendas = valorCarro * carrosVendidos

    console.log(`Seu valor de vendas totais foi de: ${valorTotalVendas.toFixed(2)}`)

    
    salarioTotal = (comissaoFixa * carrosVendidos) + (salario * 0.05) + salario

    //console.log(salarioTotal.toFixed(2))

    valorSeparado = carrosVendidos / salarioTotal + 0.05

    console.log(`Seu salário fixo atual é de ${salario}, com um percentual total de ${(valorSeparado * 100).toFixed(2)}% por carro vendido, seu salário ficará ${salarioTotal}`)
    
    //Nota mental para o futuro, fazer o cálculo final como fiz em valorSeparado para converter os decimais em porcentagem, não esquecer na próxima.

    
    



}

salarioFunci()





