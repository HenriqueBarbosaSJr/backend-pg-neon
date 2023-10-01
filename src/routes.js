const express = require('express');
const controllerProds = require('./controllers/controllerProds');
const controllerClient = require('./controllers/controllerClient');

const routes = express.Router();


/// Rotas da tabela produtos ///
routes.get('/', controllerProds.raiz );
routes.get('/produtos', controllerProds.prod);
routes.get('/produtos/:nome', controllerProds.searchName);
routes.post('/produtos', controllerProds.createProd);
routes.put('/produtos/:cod', controllerProds.updateProd);
routes.delete('/produtos/:cod', controllerProds.deleteProd);

/// Rotas da tabela clientes ///
routes.get('/listclient', controllerClient.listClientes);
routes.get('/listclient/:nome', controllerClient.searchName);

module.exports = routes;