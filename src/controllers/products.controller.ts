import { Router, Request, Response } from 'express';
import productsService from '../services/products.service';

const productsController = Router();

productsController.get('/', async (req: Request, res: Response): Promise<Response> => {
  const products = await productsService.getProducts();
  return res.status(200).json(products);
});

export default productsController;
