const express = require('express')
const router = express.Router()

//Importação de controllers (nossas funções)


const alunoControllers = require('../controllers/alunoControllers')
const agendamentoControllers = require('../controllers/agendamentoControllers')


//Importação de validators (validações)


const {validarID} = require('../validators/idValidator')
const {alunoVALIDADOR} = require('../validators/alunoVALIDADOR')





//Rotas de Aluno

router.post('/aluno', alunoVALIDADOR, alunoControllers.create)
router.get('/aluno', alunoControllers.getALL)
router.get('/aluno/:id', validarID, alunoControllers.getById)
router.put('/aluno/:id', validarID, alunoVALIDADOR, alunoControllers.update)
router.delete('/aluno/:id', validarID, alunoControllers.remove)


//Rota Agendamento
router.post('/aluno/agendamento', agendamentoControllers.create)






















//Por fim exportamos nossas rotas

module.exports = router

//Usaremos nosso router no index.js