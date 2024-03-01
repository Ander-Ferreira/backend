// ctrl + ; para comentar, atalho
/* comentário mútiplas linhas shift + alt + a */


// Variável com var

var nome = 'Anderson'


// Imprime informações no console (terminal)
console.log()
console.log(2)
console.log(nome)
console.log(1,2,3,4)
console.log('NOME: ', 'Anderson')
console.log('Nome: ', nome)
console.log('QUALQUER TEXTO' + 'OUTRO TEXTO')
console.log(2 + 2)

// Tipos de dados
var texto = 'TEXTO'
console.log( 'Variável texto: ', typeof texto)

var numero = 2
console.log('Variável número: ', typeof numero)

var numeroFlutuante = 2.5
console.log('Variável número: ', typeof numeroFlutuante)

var numeroNegativo = 2.5
console.log('Variável número: ', typeof numeroNegativo)

var boleanos = true //Ou false
console.log('Boleanos: ', typeof boleanos)

var array = [1, 2, 3, 4, 5]
console.log('Tipo de variável Array: ', typeof array)

var arrayNumeros = [1, 2, 3, 4, 5]
var arrayCarros = ['Gol', 'uno', 'civic']
var arrayDinamico = [true, 'string', 2]

var pessoa = {
    'nome': 'Anderson',
    'idade': 150,
    'nacionalidade': 'Braziliano'

}

console.log(pessoa)
console.log(typeof pessoa)

const A1 = 6
const A2 = 5

const media = A1 + A2 / 2

if(media >= 5){
   console.log('Aprovado') 

}

// Comando para transformar uma pasta em projeto: npm init
// site para criar gitignore.io
// instala biblioteca prompt sync: npm install prompt-sync





