const express = require('express')
const router = express.Router()


const cargoController = require('../controllers/cargoController')


//Cargos
router.post('/cargos', cargoController.create )












module.exports = router