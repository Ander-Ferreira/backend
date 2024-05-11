//Agora importamos o exprexx
const express = require('express')
//Importamos nossa route
const router = express.Router()

//Importamos os métodos que fizemos em controllers/cargoControllers
const cargoController = require('../controllers/cargoControllers')

//Agora usamos os métodos importados em nossas rotas

router.post('/cargos', cargoController.create)

router.get('/cargos', cargoController.getAll)

router.get('/cargos/:id', cargoController.getById)

router.put('/cargos/:id', cargoController.update)

router.delete('/cargos/:id', cargoController.deletar)











module.exports = router
