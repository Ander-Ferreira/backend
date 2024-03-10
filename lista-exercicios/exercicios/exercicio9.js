/*
9. Faça um script para somar dois números e multiplicar o resultado pelo primeiro número.
*/

let prompt = require('prompt-sync')();

let numeroA = Number(prompt('Digite um número: '))

let numeroB = Number(prompt('Digite outro número: '))

const soma = function(multi, adicao){
    adicao = (numeroA + numeroB) * numeroA
    console.log(`O resultado é ${adicao}`)
    return

}

soma()