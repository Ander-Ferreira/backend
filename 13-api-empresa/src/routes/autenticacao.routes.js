const express= require('express')
const router = express.Router()

const autenticacaoController = require('../controllers/autenticacaoController')


const {usuarioValidador} = require('../validators/autenticacaoValidator')

//Criar conta
router.post('/auth/registro', usuarioValidador, autenticacaoController.registrar)

//Logar
router.post('/auth/login', autenticacaoController.login)
























module.exports = router
