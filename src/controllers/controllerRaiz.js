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
                                body {
                                margin-left: 25px;
                                }
                                .header-container {
                                display: flex;
                                align-items: center;
                                }
                                .header-container img {
                                    margin-right: 10px; 
                                }
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

                                h3:nth-of-type(1) {
                                    color: red;
                                }
                                h3:nth-of-type(2) {
                                    color: blue;
                                }
                                h3:nth-of-type(3) {
                                    color: green;
                                }
                                h3:nth-of-type(4) {
                                    color: purple;
                                }
                                h3:nth-of-type(5) {
                                    color: orange;
                                }
                                h3:nth-of-type(6) {
                                    color: rgb(2, 25, 225);
                                }
                                h3:nth-of-type(7) {
                                    color: rgb(255, 47, 0);
                                }

                                </style>
                        </head>
                        <body>
                            <h1>Servidor backend hospedado no Reder.com</h1>
                            <br>
                            <h2>Configurações:</h2>
                            <h2>baseURL : 'https://backend-pg-neon.onrender.com'</h2>
                            <br>
                            <h3>Tabebla: Produtos</h3>
                            <table>
                                <tr>
                                    <td>Atributo</td>
                                    <td>tipo</td>
                                </tr>
                                <tr>
                                    <td>codpro</td>
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
                            <h3>Rotas para a tabela produtos:</h3>
                            <p>Requisição GET - <strong>Consulta todos os produtos</strong> -   /produtos</p>
                            <p>Requisição GET - <strong>Consulta de produtos por nome</strong> -   /produtos/:nome</p>
                            <p>Requisição POST - <strong>Cadastro</strong> de produtos -   /produtos</p>
                            <p>Requisição PUT - <strong>Alteração</strong> de produtos -   /produtos/:codpro</p>
                            <p>Requisição DELETE - <strong>Exclusão</strong> de produtos -   /produtos/:codpro</p> 
                            
                            </br></br></br>
                            <h3>Tabebla: funcionarios</h3>
                            <table>
                                <tr>
                                    <td>Atributo</td>
                                    <td>tipo</td>
                                </tr>
                                <tr>
                                    <td>id</td>
                                    <td>AI PRIMARY KEY</td>
                                </tr>
                                <tr>
                                    <td>nome</td>
                                    <td>VARCHAR(50) NOT NULL</td>
                                </tr>
                                <tr>
                                    <td>departamento</td>
                                    <td>VARCHAR(45) NOT NULL</td>
                                </tr>
                                <tr>
                                    <td>funcao</td>
                                    <td>VARCHAR(45) NOT NULL</td>
                                </tr>
                                <tr>
                                    <td>salario</td>
                                    <td> NUMERIC(10, 2) NOT NULL</td>
                                </tr>
                            </table>

                            <h3>Rotas para a tabela funionarios:</h3>
                            <p>Requisição GET - <strong>Consulta todos os funionarios</strong> -   /listfunc</p>
                            <p>Requisição POST - <strong>Cadastro de funionario </strong> -    /createfunc</p>
                            <p>Requisição PUT - <strong>Alteração de funcionario</strong>  -   /func/:id</p>
                            <p>Requisição DELETE - <strong>Exclusão de funcionario</strong> -  /func/:id</p>
                            </br></br></br>
                            <h3>Tabebla: clientes</h3>
                            <table>
                                <tr>
                                    <td>Atributo</td>
                                    <td>tipo</td>
                                </tr>
                                <tr>
                                    <td>codcli</td>
                                    <td>AI PRIMARY KEY</td>
                                </tr>
                                <tr>
                                    <td>nome</td>
                                    <td>VARCHAR(45) NOT NULL</td>
                                </tr>
                                <tr>
                                    <td>email</td>
                                    <td>VARCHAR(45) NOT NULL</td>
                                </tr>
                                <tr>
                                    <td>uf</td>
                                    <td>VARCHAR(45) NOT NULL</td>
                                </tr>
                                <tr>
                                    <td>password</td>
                                    <td>VARCHAR(45) NOT NULL</td>
                                </tr>
                                <tr>
                                    <td>level</td>
                                    <td>INTERGER NOT NULL</td>
                                </tr>
                                <tr>
                                    <td>createat</td>
                                    <td> timestamp DEFAULT CURRENT_TIMESTAMP</td>
                                </tr>
                            </table>
                            <h3>Rotas para a tabela clientes:</h3>
                            <p>Requisição GET - <strong>Consulta todos os clientes</strong> -   /listclient</p>
                            <p>Requisição GET - <strong>Consulta por nome dos clientes</strong>  -   /listclient/:nome</p>
                            <p>Requisição POST - <strong>Cadastro de clientes</strong> -    /createclient</p>
                            <p>Requisição PUT - <strong>Alteração de clientes</strong>  -   /client/:codcli</p>
                            <p>Requisição DELETE - <strong>Exclusão de clientes</strong> -  /client/:codcli</p>
                            

                            <br>
                            <div class="header-container">
                                <img src="https://img.icons8.com/3d-fluency/94/server.png" alt="">
                                <h2>Servidor em funcionamento</h2>
                            </div>

                        </body>
                        </html>
                    `

        return res.send(html);
    },


}