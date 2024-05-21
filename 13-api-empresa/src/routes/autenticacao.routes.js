<<<<<<< HEAD
const express = require('express')
const router = express.Router()

//Importação da validadores

const autenticacaoController = require('../controllers/autenticacaoController')
const {usuarioVALIDADOR, loginVALIDADOR} = require('../validators/autenticacaoValidator')

//Criar conta
router.post('/auth/registro', usuarioVALIDADOR, autenticacaoController.registrar)

//Logar

router.post('/auth/login', loginVALIDADOR, autenticacaoController.login)
=======
const express= require('express')
const router = express.Router()

const autenticacaoController = require('../controllers/autenticacaoController')


const {usuarioValidador} = require('../validators/autenticacaoValidator')

//Criar conta
router.post('/auth/registro', usuarioValidador, autenticacaoController.registrar)

//Logar
router.post('/auth/login', autenticacaoController.login)
>>>>>>> 21d003b57a51d15eb5f543a2d842808df2317d80







<<<<<<< HEAD
module.exports = router
=======

















module.exports = router
>>>>>>> 21d003b57a51d15eb5f543a2d842808df2317d80
