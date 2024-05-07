const express = require('express')
const router = express.Router()

const produtoController = require('../constrollers/produtoController')

router.get('/', (req, res)=>{
    res.json('OK')
})

//Rotas produtos
router.get('/produtos', produtoController.getAll)
router.post('/produtos', produtoController.create)






module.exports = router