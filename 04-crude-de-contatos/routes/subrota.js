//importa o modulo do express
const express = require('express')
//criando um router
const router = express.Router()


//crio as rotas e as lógicas
router.get('/subrota', (req, res)=>{

res.send('tutorial get')

})

router.post('/subrota', (req, res)=>{

res.send('tutorial post')

})


router.put('/subrota', (req, res)=>{

    res.send('testando put')
    
    })

router.patch('/subrota', (req, res)=>{

    res.send('testando delete')
            
})

router.delete('/subrota', (req, res)=>{

    res.send('testando delete')
        
})


//exporto o router
//este router também é um middleware
module.exports = router








