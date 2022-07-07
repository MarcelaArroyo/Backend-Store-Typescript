import { Router } from 'express';
import productsController from './controllers/products.controller';

const routes = Router();

routes.use('/products', productsController);

export default routes;