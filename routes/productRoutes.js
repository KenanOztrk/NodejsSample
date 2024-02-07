const {ProductController} = require('../controllers/productController');

const routes = require('express').Router()

routes.get('/', ProductController.getAll)
routes.get('/:id', ProductController.getById)
routes.post('/', ProductController.create)
routes.delete('/:id', ProductController.delete)

module.exports = routes;