/*3. Escreva um script para ler o salário mensal atual de um funcionário e o percentual de reajuste. 
Calcular e escrever o valor do novo salário.
*/

let prompt = require('prompt-sync')();

let salario = Number(prompt('Digite seu salário: '))

let reajuste = Number(prompt('Digite o seu reajuste: '))

const salarioTotal = function(total){
    total = ((salario * reajuste) / 100) + salario
    console.log(`Seu salário era ${salario}, com o reajuste de ${reajuste}% ficou ${total}`)
}

salarioTotal()



