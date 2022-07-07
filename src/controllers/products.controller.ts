import { Router, Request, Response } from 'express';
import productsService from '../services/products.service';

import validationProduct from '../middlewares/products.middleware';

const productsController = Router();

productsController.get('/', async (req: Request, res: Response): Promise<Response> => {
  const products = await productsService.getProducts();
  return res.status(200).json(products);
});

productsController.post('/', validationProduct, async (req: Request, res: Response):
Promise<Response> => {
  const newProduct = await productsService.createProduct(req.body);
  return res.status(201).json(newProduct);
});

export default productsController;
