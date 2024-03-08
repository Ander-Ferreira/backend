/*1. Faça um Programa que receba quatro notas de um aluno, calcule e imprima 
a média aritmética das notas e a mensagem de aprovado para média superior 
ou igual a 7.0 ou a mensagem de reprovado para média inferior a 7.0.*/

let prompt = require('prompt-sync')();

let nota1 = Number(prompt('Digite sua primeira nota: '))

let nota2 = Number(prompt('Digite sua segunda nota: '))

let nota3 = Number(prompt('Digite sua terceira nota: '))

let nota4 = Number(prompt('Digite sua quarta nota: '))


const media = function(total){
    total = (nota1 + nota2 + nota3 + nota4) / 4
    if(total >= 7){
        console.log('Parabéns, você foi aprovado!')
    }
    else{
        console.log('Você foi reprovado, se lascou.')
    }
    return

}

media()
