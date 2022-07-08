import { Router, Request, Response } from 'express';
import usersService from '../services/users.service';
import validUser from '../middlewares/users.middleware';

const usersController = Router();

usersController.post('/', validUser, async (req: Request, res: Response):
Promise<Response> => {
  const token = await usersService.createUser(req.body);
  return res.status(201).json({ token });
});

export default usersController;