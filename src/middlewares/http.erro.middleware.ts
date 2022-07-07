import { Request, Response } from 'express';
import HttpExeception from '../classes/http.exeception';

const httpErroMiddleware = (err: Error, req: Request, res: Response) => {
  const { status, message } = err as HttpExeception;
  res.status(status || 500).json({ message });
};

export default httpErroMiddleware;