const express = require('express')
const router = express.Router()

//Importação de controllers (nossas funções)

const cargoController = require('../controllers/cargoControllers')
const funcionarioController = require('../controllers/funcionarioControllers')

//Importação de validators (validações)

const {cargoVALIDADOR} = require('../validators/cargoValidator') //aperto dentro do objeto ctrl + espaço para selecionar nossa função, precisa ter sido exportado como objeto para aparecer.
const {validarID} = require('../validators/idValidator')


//Rotas de cargos
router.post('/cargos', cargoVALIDADOR, cargoController.create)
router.get('/cargos', validarID, cargoController.getAll)
router.get('/cargos/:id', validarID, cargoController.getById)
router.put('/cargos/:id', validarID, cargoVALIDADOR, cargoController.update)
router.delete('/cargos/:id', validarID, cargoController.remove)

//Rotas de Funcionários

router.post('/funcionarios', funcionarioController.create)
router.get('/funcionarios', validarID, funcionarioController.getAll)
router.get('/funcionarios/:id', validarID, funcionarioController.getById)
router.put('/funcionarios/:id', funcionarioController.update)
router.delete('/funcionarios/:id', validarID, funcionarioController.remove)









//Por fim exportamos nossas rotas

module.exports = router

//Usaremos nosso router no index.js