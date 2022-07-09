import { Request, Response, Router } from 'express';
import ordersService from '../services/orders.service';

const ordersController = Router();

ordersController.get('/', async (req: Request, res: Response):
Promise<Response> => {
  const orders = await ordersService.getOrders();
  return res.status(200).json(orders);
});

export default ordersController;