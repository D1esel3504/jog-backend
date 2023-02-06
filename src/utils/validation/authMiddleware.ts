import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken'
import { SECRET_KEY } from 'src/config/config'
import { Role } from 'src/enums/enums';

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    let token = req.headers.authorization;

    if (!token) {
      return res.status(403).send('Unauthorized user');
    }

    token = token.replace(/^Bearer\s+/, '');

    const decodeData = jwt.verify(token, SECRET_KEY);

    res.locals = { user: decodeData };
    next();
  } catch (e: any) {
    res.status(403).send(e.message);
  }
};

export const permitAdminOnly = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { user } = res.locals;

  if (user.role === Role.ADMIN) {
    next();
  } else {
    res.status(403).send('User doesn`t have permisson');
  }
};
