const knex = require("../database")



module.exports = {


    async listClientes(req, res){
        try {
            
            const result = await knex('clientes');
            const qtdaRegistros = result.length;

            return res.json({
                            'Quantidade de Registros ':qtdaRegistros,
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
    }

}