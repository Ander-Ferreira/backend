//Importamos a nossa biblioteca de validações de esquemas (schemes) yup
const yup = require('yup')

//Agora validaremos todos os campos do nosso scheme de Cargos que foram criados lá em models

const schema = yup.object().shape({
    nome: yup.string('O campo precisa ser um texto!').required('Campo obrigatório!'),
    cpf: yup.string('O campo precisa ser um texto!').required('Campo obrigatório!'),
    email: yup.string('O campo precisa ser um texto!').email('Email inválido!'),
    telefone: yup.string('O campo precisa ser um texto!'),
    dataContratos: yup.date('Data inválida').required('Campo obrigatório!'),
    dataNascimento:yup.date('Data inválida').required('Campo obrigatório!'),
    genero:yup.string('Campo precisa ser texto').required('Campo obrigatório!'),
    cargo:yup.string('Campo precisa ser uma string'),
    derpartamento:yup.string('O campo precisa ser uma string') 

})


//Agora criaremos uma função que executará a validação de cargos que criamos

function funcionariOVALIDADOR (req, res, next){
    schema.validate(req.body, {abortEarly:false} ) //O abortEarly:false é para evitar que o validador encerre no primeiro erro, pode haver mais erros
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
    
    funcionariOVALIDADOR

}

//exportaremos isso lá para as nossas rotas (routes)