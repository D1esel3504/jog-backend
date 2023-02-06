import { IJog } from "src/types/jog";
import Jog from "src/modules/jog/model";

import cleanUp from 'src/utils/common'

export const get = async (data = {}) => {
  const jogs = await Jog.find(data).populate('userId');

  return jogs.map(cleanUp);
};

export const getOne = async (jogId: string) => {
  const jog = await Jog.findById(jogId).populate('userId');

  return cleanUp(jog);
};

export const create = async (data: IJog) => {
  const jog = await Jog.create(data);

  return cleanUp(jog);
};

export const removeJog = async (jogId: string) => {
  const jog = await Jog.findByIdAndDelete(jogId);

  return jog;
};

export const updateJog = async (jogId: string, jogDTO: Partial<IJog>) => {
  const jog = await Jog.findByIdAndUpdate(jogId, jogDTO, {
    new: true,
  }).populate('userId');

  return cleanUp(jog);
};

export const getPartialSearchJogs = async (search: string) => {
  const jog = await Jog.find({ name: { $regex: search, $options: "i" } });

  return cleanUp(jog);
};

