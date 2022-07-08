import { JwtPayload, sign, SignOptions, verify } from 'jsonwebtoken';
import IUser from '../interfaces/users.interface';
import 'dotenv/config';
import HttpExeception from '../classes/http.exeception';

const SECRET = process.env.SECRET || 'fgiAS$*&@4DFad89367fgu%$$i6';

const jwtConfig: SignOptions = {
  expiresIn: '20m',
  algorithm: 'HS256',
};

const generateJWToken = (payload: Omit<IUser, 'password'>) => sign(payload, SECRET, jwtConfig);

const verifyToken = async (token: string | undefined): Promise<string | JwtPayload> => {
  if (!token) {
    throw new HttpExeception(401, 'jwt malformed');
  }

  try {
    const validate = verify(token, SECRET);
    return validate;
  } catch (error) {
    throw new HttpExeception(401, 'jwt malformed');
  }
};

export default { generateJWToken, verifyToken };