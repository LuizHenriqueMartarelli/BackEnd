const aluno = require('../model/aluno');
const faker = require('faker');
const db = require('../config/conexao')

async function add(qtdAluno) {
    try {
        let novoAluno;
        for (let i=0; i<qtdAluno; i++) {
            novoAluno = {
                'PES_NOME':faker.name.firstName(),
                'PES_SOBRENOME': faker.name.lastName() ,
                'PES_IDADE': Math.round(Math.random()*100) ,
                'PES_PHONE': Math.round(Math.random()*100000000000),
                'PES_CPF' : Math.round(Math.random()*100000000000)
            }
            await aluno.create(novoAluno)
        }
    }
    catch (err) {
        console.log(err)
    }
}

add(10).then(() => {
    console.log('OK!')
    db.sequelize.close();
})