module.exports = {
    
    async raiz(req, res){
        const result = await console.log('Servidor requisitado');

        const html = `
                        <!DOCTYPE html>
                        <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Rortas da API</title>
                            <style>
                                table {
                                font-family: arial, sans-serif;
                                border-collapse: collapse;
                                width: 25%;
                                }
                                
                                td, th {
                                border: 1px solid #dddddd;
                                text-align: left;
                                padding: 8px;
                                }
                                
                                tr:nth-child(even) {
                                background-color: #dddddd;
                                }
                                </style>
                        </head>
                        <body>
                            <h1>Servidor backend hospedado no Reder.com</h1>
                            <br>
                            <h3>Configurações:</h3>
                            <p>baseURL : 'https://backend-pg-neon.onrender.com'</p>
                            <br>
                            <h3>Tabeblas</h3>
                            <table>
                                <tr>
                                    <td>Atributo</td>
                                    <td>tipo</td>
                                </tr>
                                <tr>
                                    <td>cod</td>
                                    <td>AI PRIMARY KEY</td>
                                </tr>
                                <tr>
                                    <td>nome</td>
                                    <td>VARCHAR(255) NOT NULL</td>
                                </tr>
                                <tr>
                                    <td>descri</td>
                                    <td>TEXT</td>
                                </tr>
                                <tr>
                                    <td>fabricante</td>
                                    <td>VARCHAR(255)</td>
                                </tr>
                                <tr>
                                    <td>qtda</td>
                                    <td>INTEGER</td>
                                </tr>
                                <tr>
                                    <td>preco</td>
                                    <td>NUMERIC(10, 2)</td>
                                </tr>
                                <tr>
                                    <td>custo</td>
                                    <td>NUMERIC(10, 2)</td>
                                </tr>
                                <tr>
                                    <td>data</td>
                                    <td>timestamp DEFAULT CURRENT_TIMESTAMP</td>
                                </tr>
                            </table>
                            <br>
                            <br>
                            <h3>Rotas para a tabela produtos:</h3>
                            <p>Requisição GET - <strong>Consulta todos os produtos</strong> -   /produtos</p>
                            <p>Requisição GET - <strong>Consulta de produtos por nome</strong> -   /produtos/:nome</p>
                            <p>Requisição POST - <strong>Cadastro</strong> de produtos -   /produtos</p>
                            <p>Requisição PUT - <strong>Alteração</strong> de produtos -   /produtos/:cod</p>
                            <p>Requisição DELETE - <strong>Exclusão</strong> de produtos -   /produtos/:cod</p> 
                            <br>
                            <h3>Rotas para a tabela clientes:</h3>
                            <p>Requisição GET - <strong>Consulta todos os clientes</strong> -   /listclient</p>
                            <p>Requisição GET - <strong>Consulta por nome dos clientes</strong>  -   /listclient/:nome</p>
                            <p>Requisição POST - <strong>Cadastro de clientes</strong> -    /createclient</p>
                            <p>Requisição PUT - <strong>Alteração de clientes</strong>  -   /client/:codcli</p>
                            <p>Requisição DELETE - <strong>Exclusão de clientes</strong> -  /client/:codcli</p>
                            
                        
                            <br>
                            <h2> <img src="https://img.icons8.com/3d-fluency/94/server.png" alt="">
                                Servidor em funcionamento</h2>
                        
                        </body>
                        </html>
                    `

        return res.send(html);
    },


}