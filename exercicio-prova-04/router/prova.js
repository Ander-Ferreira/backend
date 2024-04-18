const express = require('express')
const router = express.Router()



//minha lógica

let listaAlunos = [
    {   id:1,
        aluno: "Anderson",
        sala: "b2",
        curso: "Ads",
        nota: 5.1
    }
]
router.get('/provas', (req, res)=>{
    res.json(listaAlunos)
})

router.get('/provas/:id', (req, res)=>{

    const id = req.params.id
    const procurarAluno = listaAlunos.find(procurar => procurar.id == id)
    if(procurarAluno){
        return res.json(listaAlunos)
    }
    return res.status(404).json({mensagem:"Aluno não encontrado!"})

})

router.post('/provas', (req, res)=>{
    const corpoAluno = req.body
    if(!corpoAluno.aluno || !corpoAluno.sala || !corpoAluno.curso || !corpoAluno.nota){
        return res.status(400).json({mensagem:"Preencha todos os campos!"})
    }
    const cadastrarAluno = {
        id: listaAlunos.length + 1,
        aluno: corpoAluno.aluno,
        sala: corpoAluno.sala,
        curso: corpoAluno.curso,
        nota: corpoAluno.nota
    }
    listaAlunos.push(cadastrarAluno)
    return res.status(200).json({mensagem:"Aluno cadastrado com sucesso!"})
})

router.delete('/provas/:id', (req, res)=>{
    const id = req.params.id
    const procurarAluno = listaAlunos.findIndex(procurar=> procurar.id == id)
    if(procurarAluno == -1){
        return res.status(404).json({mensagem:"Aluno não encontrado!"})
    }
    listaAlunos.splice(procurarAluno, 1)
    return res.status(200).json({mensagem:"Aluno excluído com sucesso!"})
})

router.put('/provas/:id', (req, res)=>{
    const id = req.params.id
    const corpoAluno = req.body
    const procurarAluno = listaAlunos.findIndex(procurar=> procurar.id == id)
    if(!corpoAluno.aluno || !corpoAluno.sala || !corpoAluno.curso || !corpoAluno.nota){
        return res.status(400).json({mensagem:"Preencha todos os campos!"})
    }
    if(procurarAluno == -1){
        return res.status(404).json({mensagem:"Aluno não encontrado!"})
    }
    const atualizarAluno = {
        id: Number(id),
        aluno: corpoAluno.aluno,
        sala: corpoAluno.sala,
        curso: corpoAluno.curso,
        nota: corpoAluno.nota
    }
    listaAlunos[procurarAluno] = atualizarAluno
    return res.status(200).json({mensagem:"Aluno atualizado com sucesso!"})
    
})

//Buscar a nota total dos alunos
//http://localhost:3000/provas/sala/bc/nota-total
router.get('/provas/sala/:sala/nota-total', (req, res)=>{
    const sala = req.params.sala
    const procurarSala = listaAlunos.filter(procurar=> procurar.sala == sala)
    let notaTotal = 0
    procurarSala.forEach(procurar=>{
        notaTotal = notaTotal + procurar.nota
    })

    res.json({
        notaTotal: notaTotal.toFixed(2)
    })
})












module.exports = router