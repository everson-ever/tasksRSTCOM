const routes = require('express').Router();
const authMiddleware = require('../app/middlewares/auth');

const SignupController = require('../app/controllers/SignupController');
const SessionController = require('../app/controllers/SessionController');

routes.post('/session', SessionController.store);

routes.post('/signup', SignupController.store);


module.exports = routes;
