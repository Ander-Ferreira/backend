const express = require('express')
const router = express.Router()



//IMPORTAÇÃO DE VALIDATORS (middlewares)

//Validar ID
const {validarID} = require('../validators/idValidator')

//Validar Genero
const {generoValidador} = require('../validators/generoValidator')

//Validar Autor
const {autorValidador} = require('../validators/autorValidator')

//Validar Livros
const {livroValidador} = require('../validators/livroValidator')

//Validar Carrinho
const {validarCarrinho} = require('../validators/carrinhoValidator')



//IMPORTAÇÃO DOS MEUS CONTROLLERS

//Controller de Livros
const livrosControllers = require('../controllers/livrosControllers')

//Controller de Generos
const generosControllers = require('../controllers/generosControllers')

//Controller de Autor
const autorControllers = require('../controllers/autorControllers')


//Importação de carrinho
const carrinhoCOMPRAS = require('../controllers/carrinhoController')

//ROTAS

//Rotas de Carrinho
router.post('/carrinho', validarCarrinho, carrinhoCOMPRAS.create)



//Rotas de Livros

router.post('/livros', livroValidador, livrosControllers.create)
router.get('/livros', livrosControllers.getAll)
router.get('/livros/:id', validarID, livrosControllers.getById)
router.put('/livros/:id', validarID, livroValidador, livrosControllers.update)
router.delete('/livros/:id', validarID, livrosControllers.remove)

//Rotas de Generos

router.post('/generos', generoValidador, generosControllers.create)
router.get('/generos', generosControllers.getAll)
router.get('/generos/:id', validarID, generosControllers.getById)
router.put('/generos/:id', validarID, generoValidador, generosControllers.update)
router.delete('/generos/:id', validarID, generosControllers.remove)


//Rotas de Autor

router.post('/autores', autorValidador, autorControllers.create)
router.get('/autores', autorControllers.getAll)
router.get('/autores/:id', validarID, autorControllers.getById)
router.put('/autores/:id', validarID, autorValidador, autorControllers.update)
router.delete('/autores/:id', validarID, autorControllers.remove)

module.exports = router
//Exporto para o meu index.js