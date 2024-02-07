const {CategoryController} = require('../controllers/categoryController');

const routes = require('express').Router();

routes.get('/', CategoryController.getAll);
routes.get('/:id', CategoryController.getById);
routes.post('/', CategoryController.create);
routes.delete('/:id', CategoryController.delete);


module.exports = routes;
