/*
7. Faça um script que leia duas notas de um aluno, calcule e 
escreva a média final deste aluno. Considerar que a média é
 ponderada e que o peso das notas é 4 e 6.
 */

 let prompt = require('prompt-sync')();

 let nota1 = Number(prompt('Digite sua primeira nota: '))

 let nota2 = Number(prompt('Digite sua segunda nota: '))

 const media = function(peso1, peso2,notaPeso1, notaPeso2, mediaFinal){
    peso1 = 6
    peso2 = 4

    notaPeso1 = (nota1 * peso1)

        
    notaPeso2 = (nota2 * peso2)

    mediaFinal = (notaPeso1 + notaPeso2) / 10

    console.log(`Sua media final ficou é de ${mediaFinal}`)
    return

 }

media()

