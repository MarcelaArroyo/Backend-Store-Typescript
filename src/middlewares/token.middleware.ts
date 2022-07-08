import { Request, Response, NextFunction } from 'express';
import HttpExeception from '../classes/http.exeception';
import JWToken from '../utils/JWToken';

const authenticationToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  const payload = await JWToken.verifyToken(token);

  if (!payload) throw new HttpExeception(401, 'jwt malformed');

  res.locals.payload = payload;

  next();
};

export default authenticationToken;