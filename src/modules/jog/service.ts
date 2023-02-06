import { IJog } from "src/types/jog";
import * as repository from 'src/modules/jog/repository';

export const createJog = async (body: IJog) => {
  const createdjog = await repository.create(body);

  return createdjog;
};

export const getAllJogs = async () => {
  const jogs = await repository.get();

  return jogs;
};

export const getOne = async (jogId: string) => {
  const jog = await repository.getOne(jogId);

  return jog;
};

export const updateJog = async (jogId: string, jogDTO: IJog) => {
  const jog = await repository.updateJog(jogId, jogDTO);

  return jog;
};

export const removeJog = async (jogId: string) => {
  const jog = await repository.removeJog(jogId);

  return jog;
};

export const getPartialSearchJogs = async (search: string) => {
  const jogs = await repository.getPartialSearchJogs(search);

  return jogs;
};
