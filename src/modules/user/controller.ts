import { Request, Response } from 'express';
import * as service from 'src/modules/user/service';
import { IUser } from 'src/types/user';

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users: IUser[] = await service.getAllUsers();

    res.status(200).send(users);
  } catch (e: any) {
    res.status(403).send(e.message);
  }
};

export const getOne = async (req: Request, res: Response) => {
  try {
    const { id: userId } = req.params;
    const user: IUser = await service.getOne(userId);

    res.status(200).send(user);
  } catch (e: any) {
    res.status(403).send(e.message);
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const { body: userDTO } = req;
    const createdUser: IUser = await service.createUser(userDTO);

    res.status(200).send(createdUser);
  } catch (e: any) {
    res.status(403).send(e.message);
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const { id: userId } = req.params;
    await service.removeUser(userId);

    res.status(200).send('User has been deleted!');
  } catch (e: any) {
    res.status(403).send(e.message);
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const { id: userId } = req.params;
    const { body: userDTO } = req;
    const user: IUser = await service.updateUser(userId, userDTO);

    res.status(200).send(user);
  } catch (e: any) {
    res.status(403).send(e.message);
  }
};

export const getAllUsersJogs = async (req: Request, res: Response) => {
  try {
    const { id: userId } = req.params;
    const userJogs = await service.getAllUsersJogs(userId);

    res.status(200).send(userJogs);
  } catch (e: any) {
    res.status(403).send(e.message);
  }
};


