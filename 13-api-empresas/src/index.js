const express = require('express')
const app = express()
const port = 3000

const DBconection = require('./db/conection')
DBconection()


//Middleware
app.use(express.json())

const routes = require('./routes/routes')

app.use(routes)









app.listen(port, ()=>{
    console.log('Aplicação rodando na porta', port)
})