const express = require('express')
const router = express.Router()

//Importação das minhas funções de login e registrar

const autenticacaoController = require('../controllers/autenticaoControllers')

//Importação das minhas funções de validar login e registrar

const {usuarioVALIDADOR} = require('../validators/autenticacaoValidators')
const {loginVALIDADOR} = require('../validators/autenticacaoValidators')

//Minhas rotas
router.post('/auth/cadastrar', usuarioVALIDADOR, autenticacaoController.registrar)
router.post('/auth/login', loginVALIDADOR, autenticacaoController.login)



module.exports = router
//exporto para o meu index