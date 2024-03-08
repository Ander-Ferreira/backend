/*
4. O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%,
escrever um script para ler o custo de fábrica de um carro, calcular e escrever o custo final ao consumidor.
*/

let prompt = require('prompt-sync')();

let preco = Number(prompt('Digite o preço do seu veículo: '))

const distribuidor = 28

const impostos = 45

const custoFinal = function(totalImpostos, total){
    totalImpostos = distribuidor + impostos
    console.log(`Você está pagando um total de ${totalImpostos}% de Impostos e taxas de fabricantes`)
    total = ((preco * totalImpostos) / 100) + preco
    console.log(`O preço final de seu veículo ficará ${total}`)
    return
}

custoFinal()
