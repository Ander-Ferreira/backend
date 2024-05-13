const express = require('express')
const router = express.Router()

//Importamos as funções que criamos em controllers para trabalharmos com nossas rotas(routes)

const cargoController = require('../controllers/cargoControllers')
const funcionarioController = require('../controllers/funcionarioControllers')

//Rotas Cargos

router.post('/cargos', cargoController.create)
router.get('/cargos', cargoController.getAll)
router.get('/cargos/:id', cargoController.getById)
router.put('/cargos/:id', cargoController.update)
router.delete('/cargo/:id', cargoController.deletar)

//Rotas Funcionarios

router.post('/funcionarios', funcionarioController.create)
router.get('/funcionarios', funcionarioController.getAll)
router.get('/funcionarios/:id', funcionarioController.getById)
router.put('/funcionarios/:id', funcionarioController.update)
router.delete('/funcionarios/:id', funcionarioController.deletar)



module.exports = router
