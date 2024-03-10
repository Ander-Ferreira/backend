/*
8. Faça um script que determine o volume de uma caixa
d’água cilíndrica, sendo que o raio e a altura devem ser fornecidos.
OBS: V = PI * Raio^2 * Altura
*/

let prompt = require('prompt-sync')();

let raio = Number.parseFloat(prompt('Digite o raio: '))

let altura = Number(prompt('Digite a altura: '))

const volume = function (vol){
    
    vol = Math.PI * (raio ** 2) * altura
    
    console.log(`O volume da caixa d'gua é de: ${vol.toFixed(2)}`)
    return

}

volume()