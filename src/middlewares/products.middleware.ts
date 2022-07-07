import { NextFunction, Request, Response } from 'express';

const REQUIRED = 'is required';
const STRING = 'must be a string';
const LENGTH = 'length must be at least 3 characters long';

const validName = (name: string): [boolean | string, number] => {
  if (!name || name === '') return [`"name" ${REQUIRED}`, 400];
  if (typeof name !== 'string') return [`"name" ${STRING}`, 422];
  if (name.length < 3) return [`"name" ${LENGTH}`, 422];

  return [true, 201];
};

const validAmount = (amount: string): [boolean | string, number] => {
  if (!amount || amount === '') return [`"amount" ${REQUIRED}`, 400];
  if (typeof amount !== 'string') return [`"amount" ${STRING}`, 422];
  if (amount.length < 3) return [`"amount" ${LENGTH}`, 422];

  return [true, 201];
};

const validProduct = (req: Request, res: Response, next: NextFunction) => {
  const { name, amount } = req.body;

  const [messageName, statusName] = validName(name);
  const [messageAmount, statusAmount] = validAmount(amount);

  if (messageName !== true) return res.status(statusName).json({ message: messageName });
  if (messageAmount !== true) return res.status(statusAmount).json({ message: messageAmount });

  next();
};

export default validProduct;