const express = require('express')
const router = express.Router()

//Importamos as funções que criamos em controllers para trabalharmos com nossas rotas(routes)

//Controllers
const cargoController = require('../controllers/cargoControllers')
const funcionarioController = require('../controllers/funcionarioControllers')

//Validators
const{validarId} = require('../validators/idValidator')
const {cargoValidador} = require('../validators/cargoValidator') //ctrl espaço dentro do objeto vazio me mostra o método que quero importar


//Rotas Cargos

router.post('/cargos', cargoValidador, cargoController.create)
router.get('/cargos', cargoController.getAll)
router.get('/cargos/:id', validarId, cargoController.getById)
router.put('/cargos/:id', validarId, cargoController.update)
router.delete('/cargo/:id', validarId, cargoController.deletar)

//Rotas Funcionarios

router.post('/funcionarios', funcionarioController.create)
router.get('/funcionarios', funcionarioController.getAll)
router.get('/funcionarios/:id', funcionarioController.getById)
router.put('/funcionarios/:id', funcionarioController.update)
router.delete('/funcionarios/:id', funcionarioController.deletar)



module.exports = router
