import { Request, Response } from 'express';

import * as service from 'src/modules/jog/service';
import { IJog } from 'src/types/jog';

export const getAllJogs = async (req: Request, res: Response) => {
  try {
    const { search } = req.query 
    let jogs: IJog[];

    if (search) {
      jogs = await service.getPartialSearchJogs(search as string);
    } else {
      jogs = await service.getAllJogs();
    }

    res.status(200).send(jogs);
  } catch (e: any) {
    res.status(403).send(e.message);
  }
};

export const getOne = async (req: Request, res: Response) => {
  try {
    const { id: jogId } = req.params;
    const jog: IJog = await service.getOne(jogId);

    res.status(200).send(jog);
  } catch (e: any) {
    res.status(403).send(e.message);
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const { body: jogDTO } = req;
    const createdJog: IJog = await service.createJog(jogDTO);

    res.status(200).send(createdJog);
  } catch (e: any) {
    res.status(403).send(e.message);
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const { id: jogId } = req.params;
    await service.removeJog(jogId);

    res.status(200).send('Jog has been deleted!');
  } catch (e: any) {
    res.status(403).send(e.message);
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const { id: jogId } = req.params;
    const { body: jogIdDTO } = req;
    const jog: IJog = await service.updateJog(jogId, jogIdDTO);

    res.status(200).send(jog);
  } catch (e: any) {
    res.status(403).send(e.message);
  }
};

