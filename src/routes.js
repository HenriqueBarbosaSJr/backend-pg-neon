const express = require('express');
const controllerProds = require('./controllers/controllerProds');
const controllerClient = require('./controllers/controllerClient');
const controllerFunc = require('./controllers/controllerFunc');
const controllerRaiz = require('./controllers/controllerRaiz');

const routes = express.Router();


/// Rota para a raiz do servidor ///
routes.get('/', controllerRaiz.raiz );


/// Rotas da tabela produtos ///
routes.get('/produtos', controllerProds.prod);
routes.get('/produtos/:nome', controllerProds.searchName);
routes.post('/produtos', controllerProds.createProd);
routes.put('/produtos/:codpro', controllerProds.updateProd);
routes.delete('/produtos/:codpro', controllerProds.deleteProd);

/// Rotas da tabela clientes ///
routes.get('/listclient', controllerClient.listClientes);
routes.get('/listclient/:nome', controllerClient.searchName);
routes.post('/createclient', controllerClient.createClient);
routes.put('/client/:codcli', controllerClient.updateClient);
routes.delete('/client/:codcli', controllerClient.deleteClient);

routes.post('/userauth', controllerClient.searchUsers);

/// Rotas da tabela funcionarios
routes.get('/listfunc', controllerFunc.listFunc);
routes.post('/createfunc', controllerFunc.createFunc);
module.exports = routes;