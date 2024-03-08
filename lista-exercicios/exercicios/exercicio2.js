/*2. Escreva um script para ler o número total de eleitores de um município, 
o número de votos brancos, nulos e válidos. Calcular e escrever o percentual 
que cada um representa em relação ao total de eleitores. */

let prompt = require('prompt-sync')();

let votosValidos = 500

let votosBrancos = 200

let votosNulos = 60

const eleitoral = function(total, percentual, percentual2, percentual3){
    
    total = votosValidos + votosNulos + votosBrancos
    console.log(`O total de eleitores de um múnicipio é de ${total}`)

    percentual = (votosValidos / total) * 100
    console.log(`O percentual de votos válidos é: ${percentual.toFixed(2)}%`)
    percentual2 = (votosBrancos / total) * 100
    console.log(`O percentual de votos brancos é: ${percentual2.toFixed(2)}%`)
    percentual3 = (votosNulos / total) * 100
    console.log(`O percentual de votos nulos é: ${percentual3.toFixed(2)}%`)
    return
}

eleitoral()
