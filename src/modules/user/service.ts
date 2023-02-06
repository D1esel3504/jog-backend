import { IUser } from 'src/types/user';
import bcrypt from 'bcryptjs';
import generateAccessToken from 'src/helpers/generateAccessToken';

import * as userRepository from 'src/modules/user/repository';

export const createUser = async (body: IUser) => {
  const { email, password } = body;

  let hashPassword;

  const candidate = await userRepository.getByQuery({ email });

  if (candidate) {
    throw new Error('User already exists');
  }

  if (password) {
    hashPassword = bcrypt.hashSync(password, 3);
  } else {
    const randomPassword = Math.random().toString(36).slice(-8);
    hashPassword = bcrypt.hashSync(randomPassword, 3);
  }

  const createdUser = await userRepository.create({
    ...body,
    password: hashPassword,
  });

  return createdUser;
};

export const getAllUsers = async () => {
  const users = await userRepository.get();

  return users;
};

export const getOne = async (userId: string) => {
  const user = await userRepository.getOne(userId);

  return user;
};

export const updateUser = async (userId: string, userDTO: IUser) => {
  const user = await userRepository.updateUser(userId, userDTO);

  return user;
};

export const removeUser = async (userId: string) => {
  const user = await userRepository.removeUser(userId);

  return user;
};

export const getAllUsersJogs = async (userId: string) => {
  const usersJog = await userRepository.getAllUsersJogs(userId);

  return usersJog;
};

export const login = async (email: string, password: string) => {
  const user = await userRepository.getByQuery({ email });

  if (!user) {
    throw new Error('User doesn`t exist');
  }

  const isValidPassword = bcrypt.compareSync(password, user.password);

  if (!isValidPassword) {
    throw new Error('Invalid password');
  }

  const token = generateAccessToken(user._id, user.role);

  return { token };
};
