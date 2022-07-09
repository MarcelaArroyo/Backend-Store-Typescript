import { Router } from 'express';
import productsController from './controllers/products.controller';
import usersController from './controllers/users.controller';
import ordersController from './controllers/orders.controller';

const routes = Router();

routes.use('/products', productsController);
routes.use('/users', usersController);
routes.use('/orders', ordersController);

export default routes;