const express = require('express')
const router = express.Router()


//minha lógica

const listaCarros = [
    {
        id: 1,
        cor: "esportivo",
        marca: "fiat",
        nome: "fiat 147",
        cor: "verde"
    }
]
router.get('/lista', (req, res)=>{
    res.json(listaCarros)
})

//pegando por id em específico

router.get('/lista/:id', (req, res)=>{
    const id = req.params.id
    const procurarCarro = listaCarros.find(procurar=> procurar.id == id)
    if(procurarCarro){
        res.status(200).json(procurarCarro)
    }

    else{
        res.status(404).json({mensagem:"O carro não está na lista!"})

    }
})


//Post- cadastrar

router.post('/lista', (req, res)=>{
    const requisicaoCarro = req.body
    if(!requisicaoCarro.cor || !requisicaoCarro.marca || !requisicaoCarro.nome || !requisicaoCarro.cor){
        res.status(400).json({mensagem:"Preencha todos os campos!"})
    }
    else{
        const adicionarCarros = {
            id: listaCarros.length + 1,
            cor: requisicaoCarro.cor,
            marca: requisicaoCarro.marca,
            nome: requisicaoCarro.nome,
            cor: requisicaoCarro.cor
        }
        listaCarros.push(adicionarCarros)
        res.status(200).json({mensagem:"Carro cadastrado com sucesso!"})
    }

})

//deletando

router.delete('/lista/:id', (req, res)=>{
      const id = req.params.id
      const procurarCarro  = listaCarros.findIndex(procurar => procurar.id == id)
      if(procurarCarro == -1){
        res.status(404).json({mensagem:"Carro não encontrado!"})
      }
      else{
        listaCarros.splice(procurarCarro, 1)
        res.status(200).json({mensagem:"Carro excluído com sucesso!"})
      }  
})

//put - atualizar

router.put('/lista/:id', (req, res)=>{
    const id = req.params.id
    const bodyCarro = req.body
    
   if(!bodyCarro.cor || !bodyCarro.marca || !bodyCarro.nome || !bodyCarro.cor){
      res.status(400).json({mensagem:"Preencha todos os campos!"}) 
   }
   else{
       const procurarCarro = listaCarros.findIndex(procurar=> procurar.id == id)
       if(procurarCarro == -1){
            res.status(404).json({mensagem:"Carro não encontrado!"})
       }
       else{
            const atualizarCarro = {
                id: Number(id),
                cor: bodyCarro.cor,
                marca: bodyCarro.marca,
                nome: bodyCarro.nome,
                cor: bodyCarro.cor
            }
            listaCarros[procurarCarro] = atualizarCarro
            res.status(200).json({mensagem:"Carro atualizado com sucesso!"})
       }
   }
})


//buscando todos os carros por cor

router.get('/lista/cor/:cor', (req, res)=>{
    const cor =  req.params.cor
    const acharCor = listaCarros.filter(procurar => procurar.cor == cor)
    if(acharCor){
        res.status(200).json(acharCor)
    }
    else{
        res.status(404).json({mensagem:"Carro não encontrado!"})
    }
})








module.exports = router