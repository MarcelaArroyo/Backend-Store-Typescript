import { NextFunction, Request, Response } from 'express';
import MessageValid from '../utils/messageValid.enum';

const validUsername = (username: string): [boolean | string, number] => {
  if (!username || username === '') return [`"username" ${MessageValid.REQUIRED}`, 400];
  if (typeof username !== 'string') return [`"username" ${MessageValid.STRING}`, 422];
  if (username.length < 3) return [`"username" ${MessageValid.LENGTH_STRING}`, 422];

  return [true, 500];
};

const validClasse = (classe: string): [boolean | string, number] => {
  if (!classe || classe === '') return [`"classe" ${MessageValid.REQUIRED}`, 400];
  if (typeof classe !== 'string') return [`"classe" ${MessageValid.STRING}`, 422];
  if (classe.length < 3) return [`"classe" ${MessageValid.LENGTH_STRING}`, 422];

  return [true, 500];
};

const validLevel = (level: number): [boolean | string, number] => {
  if (level <= 0) return [`"level" ${MessageValid.LENGTH_NUMBER}`, 422];
  if (!level) return [`"level" ${MessageValid.REQUIRED}`, 400];
  if (typeof level !== 'number') return [`"level" ${MessageValid.NUMBER}`, 422];

  return [true, 500];
};

const validPassword = (password: string): [boolean | string, number] => {
  if (!password || password === '') return [`"password" ${MessageValid.REQUIRED}`, 400];
  if (typeof password !== 'string') return [`"password" ${MessageValid.STRING}`, 422];
  if (password.length < 8) return [`"password" ${MessageValid.LENGTH_PASSWORD}`, 422];

  return [true, 500];
};

const validUser = (req: Request, res: Response, next: NextFunction) => {
  const { username, classe, level, password } = req.body;

  const [messageUsername, statusUsername] = validUsername(username);
  const [messageClasse, statusClasse] = validClasse(classe);
  const [messageLevel, statusLevel] = validLevel(level);
  const [messagePassoword, statusPassoword] = validPassword(password);

  if (messageUsername !== true) {
    return res.status(statusUsername).json({ message: messageUsername });
  }

  if (messageClasse !== true) {
    return res.status(statusClasse).json({ message: messageClasse });
  }

  if (messageLevel !== true) {
    return res.status(statusLevel).json({ message: messageLevel });
  }

  if (messagePassoword !== true) {
    return res.status(statusPassoword).json({ message: messagePassoword });
  }

  next();
};

export default validUser;