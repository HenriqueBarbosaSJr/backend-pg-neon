const knex =  require('../database/index');

module.exports={

    async raiz(req, res){
        const result = await console.log('Servidor requisitado');

        const html = `
                        <!DOCTYPE html>
                        <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Rortas da API</title>
                        </head>
                        <body>
                            <h1>Servidor backend hospedado no Reder.com</h1>
                        
                            <h3>Configurações:</h3>
                            <p>baseURL : 'https://backend-pg-neon.onrender.com'</p>
                            
                            <h3>Rotas:</h3>
                            <p>Requisição GET - <strong>Consulta</strong> de produtos -   /produtos</p>
                            <p>Requisição POST - <strong>Cadastro</strong> de produtos -   /produtos</p>
                            <p>Requisição PUT - <strong>Alteração</strong> de produtos -   /produtos/:cod</p>
                            <p>Requisição DELETE - <strong>Exclusão</strong> de produtos -   /produtos/:cod</p> 
                            <br>
                            <br>
                            <br>
                            <h2> <img src="https://img.icons8.com/3d-fluency/94/server.png" alt="">
                                Servidor em funcionamento</h2>
                        
                        </body>
                        </html>
                    `

        return res.send(html);
    },
    
    async prod(req, res){
        try{

            const result = await knex('produtos');
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
            const results = await knex('produtos')
               .where('nome', 'like', '%' + nome + '%');
            return res.json(results);
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
            const { cod } = req.params;
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
            }).where({ cod });
            return res.status(201).send();
        }catch(error){
            return res.status(400).json({error: error.message});
        };
    },

    async deleteProd(req, res){
        try {
            const { cod } = req.params;
            await knex('produtos')
            .where({ cod })
            .del();
            return res.status(201).send({msg : 'Registro deletado!'});
        } catch (error) {
            return res.status(400).json({error: error.message});
        }
        
    }

}