//npm install prompt-sync
//npm install para instalar esta biblioteca no pc em casa
//site com a documentação da biblioteca https://www.npmjs.com/package/prompt-sync


let prompt = require('prompt-sync')();

/*

let nome = prompt('Qual o seu nome?')

console.log('Olá  ' + nome + '  bem-vindo')

let idade = prompt('Qual a sua idade?')

//console.log(typeof idade)

if(idade >= 18){
    console.log('Você é maior de idade!')
}

else{
    console.log('Você é menor de idade!')
}
*/

let notaProva1 = Number(prompt('Nota prova A1'))
let notaProva2 = Number(prompt('Nota prova A2'))

let media = (notaProva1 + notaProva2) / 2

if(media >= 5) {
    console.log('Você foi aprovado! ', media)
}
else{
    console.log('Reprovado! ', media)
}

