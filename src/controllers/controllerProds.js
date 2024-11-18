const knex =  require('../database/index');

module.exports={

    
    async prod(req, res){
        try{

            const result = await knex('produtos').orderBy('codpro', 'asc');
            const qtdaRegistros = result.length;

            return res.json({
                            'Quantidade de Registros ':qtdaRegistros,
                             result});        

        }catch(error){
            return res.status(400).json({error: error.message});
        };
    },

    async searchName(req, res){
        try {
            const { nome } = req.params;
            const result = await knex('produtos')
               .where('nome', 'like', '%' + nome + '%').orderBy('codpro', 'asc');
            const qtdaRegistros = result.length;

            return res.json({
                            'Quantidade de Registros ':qtdaRegistros,
                            result});
        } catch (error) {
            return res.status(400).json({error: error.message});
        }

    },

    async createProd(req, res) {
        try{
            const { nome } = req.body;
            const { descri } = req.body;
            const { qtda } = req.body;
            const { fabricante } = req.body;
            const { custo } = req.body;
            const { preco} = req.body;
            
            await knex('produtos').insert({
                nome,
                descri,
                qtda,
                fabricante,
                preco,
                custo
            });
            return res.status(201).send();
        }catch(error){
            return res.status(400).json({error: error.message});
        };
    },

    async updateProd(req, res){
        
        try{
            const { codpro } = req.params;
            const { nome } = req.body;
            const { descri } = req.body;
            const { qtda } = req.body;
            const { fabricante } = req.body;
            const { custo } = req.body;
            const { preco} = req.body;
            await knex('produtos').update({
                nome,
                descri,
                qtda,
                fabricante,
                preco,
                custo
            }).where({ codpro });
            return res.status(201).send();
        }catch(error){
            return res.status(400).json({error: error.message});
        };
    },

    async deleteProd(req, res){
        try {
            const { codpro } = req.params;
            await knex('produtos')
            .where({ codpro })
            .del();
            return res.status(200).send({msg : 'Registro deletado!'});
        } catch (error) {
            return res.status(400).json({error: error.message});
        }
        
    }

}