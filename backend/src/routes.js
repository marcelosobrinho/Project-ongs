/**
 * Rota  /  Recurso
 * 
 */

 /**
  * Método HTTP:
  * 
  * GET: Buscar  Uma informação dpo back-end
  * POST: Criar uma informação no back-end 
  * PUT: Alterar uma informação no back-end 
  * DELETE: Deletar uma informação no  back-end
  */


/**
 * Tipos de Parametros
 *  Query Params: parametros  nomeados enviados na rota apos "?" (Filtros, paginação) "const params = request.query;""
 *  Route Params:  parametros Utilizados para identificar recursos 
 *  Request body:  Corpo da requisição e utilizado para criação e alteração de recursos 
 * 
 */

const  express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router(); 

routes.post('/sessions',SessionController.create);


routes.get('/ongs',OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile',ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);




module.exports = routes;