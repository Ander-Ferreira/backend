const express = require('express')
const router = express.Router()

//Importação de controllers (nossas funções)

const cargoController = require('../controllers/cargoControllers')
const funcionarioController = require('../controllers/funcionarioControllers')
const departamentoController = require('../controllers/departamentoControllers')
const projetoController = require('../controllers/projetoControllers')
const tarefaControllers = require('../controllers/tarefaControllers')

//Importação de validators (validações)

const {cargoVALIDADOR} = require('../validators/cargoValidator') //aperto dentro do objeto ctrl + espaço para selecionar nossa função, precisa ter sido exportado como objeto para aparecer.
const {validarID} = require('../validators/idValidator')
const {funcionariOVALIDADOR} = require('../validators/funcionarioValidators')
const {validarDEPARTAMENTO} = require('../validators/departamentoValidators')
const {projetoVALIDADOR} = require('../validators/projetoValidator')
const {tarefaVALIDADOR} = require('../validators/tarefaValidator')




//Rotas de cargos
router.post('/cargos', cargoVALIDADOR, cargoController.create)
router.get('/cargos', cargoController.getAll)
router.get('/cargos/:id', validarID, cargoController.getById)
router.put('/cargos/:id', validarID, cargoVALIDADOR, cargoController.update)
router.delete('/cargos/:id', validarID, cargoController.remove)

//Rotas de Funcionários

router.post('/funcionarios', funcionariOVALIDADOR, funcionarioController.create)
router.get('/funcionarios', funcionarioController.getALL)
router.get('/funcionarios/:id', validarID, funcionarioController.getById)
router.put('/funcionarios/:id', validarID, funcionariOVALIDADOR, funcionarioController.update)
router.delete('/funcionarios/:id', validarID, funcionarioController.remove)


//Rotas Departamento

router.post('/departamento', validarDEPARTAMENTO, departamentoController.create)
router.get('/departamento', departamentoController.getALL)
router.get('/departamento/:id', validarID, departamentoController.getById)
router.put('/departamento/:id', validarID, validarDEPARTAMENTO, departamentoController.update)
router.delete('/departamento/:id', validarID, departamentoController.remove)



//Projeto
router.post('/projetos', projetoVALIDADOR, projetoController.create)
router.get('/projetos', projetoController.getALL)
router.get('/projetos/:id', validarID, projetoVALIDADOR, projetoController.getById)
router.put('/projetos/:id', validarID, projetoVALIDADOR, projetoController.update)
router.delete('/projetos/:id', validarID, projetoController.remove)





//Tarefas
router.post('/tarefas', tarefaVALIDADOR, tarefaControllers.create)
router.get('/tarefas', tarefaControllers.getALL)
router.get('/tarefas/:id', validarID, tarefaControllers.getById)
router.put('/tarefas/:id', validarID, tarefaVALIDADOR, tarefaControllers.update)
router.delete('/tarefas/:id', validarID, tarefaControllers.remove)











//Por fim exportamos nossas rotas

module.exports = router

//Usaremos nosso router no index.js