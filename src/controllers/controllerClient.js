const knex = require('../database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


module.exports = {


    async listClientes(req, res){
        try {
            
            const result = await knex('clientes').orderBy('codcli', 'asc');
            const qtdaRegistros = result.length;

            return res.json({
                            'Quantidade de Registros':qtdaRegistros,
                            result});

        } catch (error) {

            return res.status(400).json({error: error.menssage});
            
        }
    },
    async searchName(req, res){
        try {
            
            const { nome } = req.params;
            const result = await knex('clientes')
                .where('nome', 'like', '%' + nome + '%');
            const qtdaRegistros = result.length;  

            return res.json({
                            'Quantidade de Registros ':qtdaRegistros,
                            result});

        } catch (error) {
            
            return res.status(400).json({error: error.menssage});

        }
    },

    async createClient(req, res) {
        try{
            const { nome } = req.body;
            const { email } = req.body;
            const { uf } = req.body;
            const { level } = req.body;
            const password = await bcrypt.hash(req.body.password, 10);

            const result = await knex ('clientes').where( { email } );
            if(result.length === 1){
                return res.status(400).send({ error:'E-mail já cadastrado !!!' });
                        
            }      
            console.log(password);
            await knex('clientes')
            .insert({ nome, email, uf, level, password });
            return res.status(201).send( { nome, email, uf, level, password});
        }catch (error){
            return res.status(400).json({error: error.message});
        }
    },

    async updateClient(req, res){
        try{
            const { codcli } = req.params;
            const { nome } = req.body;
            const { email } = req.body;
            const { uf } = req.body;
            const { level } = req.body;
            const password = await bcrypt.hash(req.body.password, 10);

            const result = await knex ('clientes').where( { codcli } );
            if(result.length === 1){
                await knex('clientes').update({ nome, email, uf, level, password }).where({ codcli });
                return res.status(201).send();     
            }else{
                return res.status(400).send({ error:'Código do cliente inválido !!!' });
            }
        }catch(error){
            return res.status(400).json({error: error.message});
        };
    },


    async deleteClient(req, res){
        try {
            const { codcli } = req.params;

            const result = await knex ('clientes').where( { codcli } );
            if(result.length === 1){
                await knex('clientes')
                .where({ codcli })
                .del();
                return res.status(201).send({msg : 'Registro deletado!'});                
            }else{
                return res.status(400).send({ error:'Código do cliente inválido !!!' });
            }

        } catch (error) {
            return res.status(400).json({error: error.message});
        }
        
    },

    async searchUsers(req, res){
        try {
            const { email } = req.body;
            const   [ result ]  = await knex ('clientes').where( { email } );
            console.log(result);
            if (result != undefined){
                bcrypt.compare(req.body.password, result.password,(err, respok)=>{
                    if (err){     
                              /* As mensagens de retorno precisam ser genéricas sem indicar o tipo de erro, 
                                 para não comprometer a segurança */

                        return res.status(401).send({mensagem: 'Falha na autenticação - error interno bcrypt'});
                    }
                    if (respok){
                        const token = jwt.sign({
                            idUser:result.id,
                            nome:result.nome,
                            email:result.email,
                            level:result.level
                        },'segredo',
                        {
                            expiresIn:'1h'
                        }
                        );
                        return res.status(200).send({
                            token:token,
                            mensagem: 'Autenticação com sucesso'});
                    }
                    return res.status(401).send({mensagem: 'Falha na autenticação - error password'});
                });
            }else{
                console.log({result});
                return res.status(401).send({mensagem: 'Falha na autenticação - email'});
            }
        } catch (error) {
          console.log(error);
        }
    }
            

}