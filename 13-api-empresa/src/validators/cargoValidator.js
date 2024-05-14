//Importamos a nossa biblioteca de validações de esquemas (schemes) yup
const yup = require('yup')

//Agora validaremos todos os campos do nosso scheme de Cargos que foram criados lá em models

const cargoSchema = yup.object().shape({
    nome: yup.string('O campo precisa ser um texto!').required('Campo obrigatório!'),
    descricao: yup.string('O campo precisa ser um texto!'),
    salario: yup.number('Precisa ser número!').min(1412, 'precisa ser maior que o salário mínimo!').required('Campo obrigatório!')


})


//Agora criaremos uma função que executará a validação de cargos que criamos

function cargoVALIDADOR (req, res, next){
    cargoSchema.validate(req.body, {abortEarly:false} ) //O abortEarly:false é para evitar que o validador encerre no primeiro erro, pode haver mais erros
    .then(()=>next())
    .catch(err=>{ //Este catch é importante porque especificará onde estará o erro caso haja um erro na requisição
        const errors = err.inner.map(e => {
            const erro = {
                campo: e.path,
                erros: e.errors
            }
            return erro
        })
        res.status(400).json({
            mensagem:"Falha na validação de campos!",
            erros: errors

        })
    })
}

//Por fim exportamos como objeto

module.exports = {
    
    cargoVALIDADOR

}

//exportaremos isso lá para as nossas rotas (routes)