import usersModel from '../models/users.model';
import IUser from '../interfaces/users.interface';
import JWToken from '../utils/JWToken';

const createUser = async (user: IUser): Promise<string> => {
  const { insertId } = await usersModel.createUser(user);
  const payload: IUser = { 
    id: insertId,
    username: user.username,
    classe: user.classe,
    level: user.level,
  };
  const token = JWToken.generateJWToken(payload);
  return token;
};

export default { createUser };