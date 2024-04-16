const express = require('express')
const router = express.Router()


//lógica

const listaPC = [{
    id: 1,
    processador: 'Ryzen 5',
    placaMae: 'A320',
    placaVideo: 'Gtx 1660 super',
    fonte: 'Coulgar',
    armazenamento: 'SSD'
}]

router.get('/lista', (req, res)=>{
    res.json(listaPC)

})


//get por um id específico

router.get('/lista/:id', (req, res)=>{
    const id = req.params.id
    const pc = listaPC.find(procurar => procurar.id == id)
    if(pc){
        res.status(200).json(pc)

    }
    else{
        res.status(404).json({mensagem:'Computador não encontrado!'})
        
    }

})


//post - cadastrando

router.post('/lista', (req, res)=>{
     const pc = req.body
     if(!pc.processador || !pc.placaMae || !pc.placaVideo || !pc.fonte || !pc.armazenamento){
        res.status(400).json({mensagem:'Por favor preencha todos os campos!'})
     }
     
     else{
        const novoPc = 
            {
                id: listaPC.length + 1,
                processador: pc.processador,
                placaMae: pc.placaMae,
                placaVideo: pc.placaVideo,
                fonte: pc.fonte,
                armazenamento: pc.armazenamento
            }
        

        listaPC.push(novoPc)
        res.status(200).json({mensagem: 'Produto cadastrado com sucesso!'})
     }


})

router.delete('/lista/:id', (req, res)=>{
       const id = req.params.id
       const pc = listaPC.findIndex(procurar => procurar.id == id)
       if(pc == -1){
            res.status(404).json({mensagem:'Este pc não existe!'})

       }
       else{
        listaPC.splice(pc, 1)
        res.status(200).json({mensagem:"Pc apagado com sucesso!"})
       }
})

router.put('/lista/:id', (req, res)=>{
    const id = req.params.id
    const novoPc = req.body
    if(!novoPc.processador || !novoPc.placaMae || !novoPc.placaVideo || !novoPc.armazenamento || !novoPc.fonte){
        res.status(400).json({mensagem:"Preencha todos os campos!"})
    }
    else{
        const pc = listaPC.findIndex(procurar => procurar.id == id)
        if(pc == -1){
            res.status(404).json({mensagem:"Este pc não existe! Coloque um válido!"})
        }
        else{
            const atualizarPc = {
                id: Number(id),
                processador: novoPc.processador,
                placaMae: novoPc.placaMae,
                placaVideo: novoPc.placaVideo,
                fonte: novoPc.fonte,
                armazenamento: novoPc.armazenamento
            }
            listaPC[pc] = atualizarPc
            res.status(200).json({mensagem:"Produto cadastrado com sucesso!"})
        }
    }
    
})








module.exports = router
