const express = require('express')
const router = express.Router()

//Lógica
const listaCarros = [
    {
        id: 1,
        modelo: "monza",
        marca: "fiat",
        cor: "vermelha",
        valor: 17
    }
]

router.get('/carros', (req, res)=>{
    res.json(listaCarros)
})


router.get('/carros/:id', (req, res)=>{
    const id = req.params.id
    const carros = listaCarros.find(carros => carros.id == id)
    if(carros){
        res.status(200).json(carros)
            }
    else{
        res.status(404).json({mensagem:"Carro não encontrado!"})
    }        

})


router.get('/carros/cor/:cor', (req, res)=>{
    const cor = req.params.cor
    const carros = listaCarros.filter(carros => carros.cor == cor)
    if(carros){
        res.status(200).json(carros)
            }
    else{
        res.status(404).json({mensagem:"Cor não encontrada!"})
    }        

})


router.post("/carros",(req,res)=>{
    const carros = req.body
    if(!carros.modelo || !carros.marca || !carros.cor || !carros.valor){
        res.status(400).json({mensagem:"É preciso preencher, modelo, marca, cor e valor"})
    }
    else{
        const registrarCarro = {
            id: listaCarros.length + 1,
            modelo: carros.modelo,
            marca: carros.marca,
            cor: carros.cor,
            valor: carros.valor

        }
        listaCarros.push(registrarCarro)
        res.status(200).json({mensagem:"carro cadastrado com sucesso!"})
    }

})

router.delete('/carros/:id', (req, res)=>{
    const id = req.params.id
    const index = listaCarros.findIndex(procurar => procurar.id == id)
    if(index == -1){
        res.status(400).json({mensage:"Produto não encontrado!"})
    }
    else{
        listaCarros.splice(index, 1)
        res.status(200).json({mensagem: "Carro excluido com sucesso"})
    }
})



router.put('/carros/:id', (req, res)=>{

const id = req.params.id
const novosCarros = req.body

if(!novosCarros.modelo || !novosCarros.marca || !novosCarros.cor || novosCarros.valor){
    res.status(400).json({mensagem:"Preencha todos os campos obrigatórios!"})

}else{
    const index = listaCarros.findIndex(procurar => procurar.id == id)
    if(index == -1){
        res.status(400).json({mensagem:"carro não encontrado!"})

    }
    else{
        const atualizarCarros = {
            id:Number(id),
            modelo: novosCarros.modelo,
            marca: novosCarros.marca,
            cor: novosCarros.cor,
            valor: novosCarros.valor

        } 
        listaCarros[index]= atualizarCarros
        res.status(200).json({mensagem: "carro actualizado!"})
    }
}



})






module.exports = router
