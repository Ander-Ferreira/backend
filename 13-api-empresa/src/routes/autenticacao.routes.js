const express = require('express')
const router = express.Router()

//Importação da validadores

const autenticacaoController = require('../controllers/autenticacaoController')
const {usuarioVALIDADOR, loginVALIDADOR} = require('../validators/autenticacaoValidator')

//Criar conta
router.post('/auth/registro', usuarioVALIDADOR, autenticacaoController.registrar)

//Logar

router.post('/auth/login', loginVALIDADOR, autenticacaoController.login)







module.exports = router
