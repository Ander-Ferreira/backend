//Imports
const express = require('express')
const app = express()
//importando router
const tutorial = require('./routes/tutorial')
const subrota = require('./routes/subrota')
const contatos = require('./routes/contatos')

//trazendo as rotas do tutorial
app.use(tutorial)
//trazendo as rotas do modo subrota
app.use('/rota', subrota)
//trazendo as rotas do modo contatos
app.use(contatos)





//middlewares
//middleware que transforma o corpo da requisição em objeto json dentro da nossa aplicação
app.use(express.json())






//Lógica e contratos


app.get('/', (req, res)=>{

res.send('Olá mundo')

})








//start da nossa aplicação pela porta 3000
app.listen(3000, ()=>{

console.log('A aplicação está rodando http://localhost:3000')

})





