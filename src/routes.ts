import { Router } from 'express';
import productsController from './controllers/products.controller';
import usersController from './controllers/users.controller';

const routes = Router();

routes.use('/products', productsController);
routes.use('/users', usersController);

export default routes;