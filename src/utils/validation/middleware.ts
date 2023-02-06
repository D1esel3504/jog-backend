import { Request, Response, NextFunction } from 'express';
import { RequestProperty } from 'src/enums/enums';

const middleware = (schema: any, property: RequestProperty) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req[property]);

    const valid = error == null;

    if (valid) {
      next();
    } else {
      const { details } = error;
      const message = details.map((i: any) => i.message).join(',');

      console.log('error', message);
      res.status(422).json({ error: message });
    }
  };
};

export default middleware;
