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
        try{
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
        }catch(error){
            return res.status(400).json({error: error.message});
        };
    },
    async deleteFunc(req, res){
        try {
            const { id } = req.params;
            await knex('funcionarios')
            .where({ id })
            .del();
            return res.status(200).send({msg : 'Registro deletado!'});
        } catch (error) {
            return res.status(400).json({error: error.message});
        }
        
    },

    async updateFunc(req, res){
        try{
           const { id } = req.params;
           const { nome } = req.body;
           const { departamento } = req.body;
           const { funcao } = req.body;
           const { salario } = req.body;
           await knex('funcionarios').update({
               nome,
               departamento,
               funcao, 
               salario
           }).where({ id });
           return res.status(201).send(
               {
                   msg:'Atualização efetuada com sucesso !!!!'
               }
           );
       }catch(error){
           return res.status(400).json({error: error.message});
       };
   },

}