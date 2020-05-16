const express = require('express');

const OngsControle = require('./controllers/OngsController')
const IncidentControle = require('./controllers/IncidentsController')
const ProfileControle = require('./controllers/ProfileControle')
const SessionController = require('./controllers/SessionController')


const routes = express.Router();

routes.post('/sessions',SessionController.create);

routes.get('/ongs',OngsControle.index);
routes.post('/ongs', OngsControle.create);  

routes.get('/profile',ProfileControle.index);

routes.get('/incidents', IncidentControle.index);  
routes.post('/incidents', IncidentControle.create);
routes.delete('/incidents/:id', IncidentControle.delete);


module.exports = routes;