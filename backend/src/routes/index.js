const routes = require('express').Router();

routes.get('/', () => {
  console.log('ok');
});

module.exports = routes;
