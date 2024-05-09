const express = require('express')
const router = express.Router()

const produtoController = require('../constrollers/produtoController')

router.get('/', (req, res)=>{
    res.json('OK')
})

//Rotas produtos
router.get('/produtos', produtoController.getAll)
router.post('/produtos', produtoController.create)
router.get('/produtos/:id', produtoController.getById)
router.put('/produtos/:id', produtoController.update)
router.delete('/produtos/:id', produtoController.deletar)






module.exports = router