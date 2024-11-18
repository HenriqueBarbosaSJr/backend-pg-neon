const knex = require('../database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


module.exports = {

    async listFunc(req, res){
        try {
            
            const result = await knex('funcionarios').orderBy('id', 'asc');
            const qtdaRegistros = result.length;

            return res.json({
                            'Quantidade de Registros':qtdaRegistros,
                            result});

        } catch (error) {

            return res.status(400).json({error: error.menssage});
            
        }
    },

    async createFunc(req, res) {
      //  try{
            const { nome } = req.body;
            const { departamento } = req.body;
            const { funcao } = req.body;
            const { salario } = req.body;
            data = {
                "nome": nome,
                "departamento": departamento,
                "funcao": funcao,
                "salario": salario
            }
            console.log(data);
            
            await knex('funcionarios').insert(data);
            return res.status(201).send();
       // }catch(error){
       //     return res.status(400).json({error: error.message});
       // };
    },


}