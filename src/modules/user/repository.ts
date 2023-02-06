import { AnyObject } from 'src/types/general';
import { IUser } from 'src/types/user';

import User from 'src/modules/user/model'
import Jog from 'src/modules/jog/model'

import cleanUp from 'src/utils/common'

export const get = async (data = {}) => {
  const users = await User.find(data);

  return users.map(cleanUp);
};

export const getOne = async (userId: string) => {
  const user = await User.findById(userId);

  return cleanUp(user);
};

export const getByQuery = async (query: AnyObject) => {
  const user = await User.findOne( query );

  return cleanUp(user);
};

export const create = async (data: IUser) => {
  const user = await User.create(data);

  return cleanUp(user);
};

export const removeUser = async (userId: string) => {
  const user = await User.findByIdAndDelete(userId);

  return user;
};

export const updateUser = async (userId: string, userDTO: Partial<IUser>) => {
  const user = await User.findByIdAndUpdate(userId, userDTO, { new: true });

  return cleanUp(user);
};

export const getAllUsersJogs = async (userId: string) => {
  const usersJogs = await Jog.find({ userId });

  return usersJogs.map(cleanUp);
};
