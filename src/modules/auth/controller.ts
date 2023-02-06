import { Request, Response } from 'express';
import * as userService from 'src/modules/user/service';

import { IUser } from 'src/types/user';
import { AnyObject } from 'src/types/general';

export const registration = async (req: Request, res: Response) => {
  try {
    const { body: userDTO } = req;
    const createdUser: IUser = await userService.createUser(userDTO);

    res.status(200).send(createdUser);
  } catch (e: any) {
    res.status(403).send(e.message);
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const token: AnyObject = await userService.login(email, password);

    res.status(200).send(token);
  } catch (e: any) {
    res.status(403).send(e.message);
  }
};

export const authMe = async (req: Request, res: Response) => {
  try {
    const { user} = res.locals;

    res.status(200).send(user);
  } catch (e: any) {
    res.status(403).send(e.message);
  }
};
