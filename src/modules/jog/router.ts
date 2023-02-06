import express from 'express';
import createValidationMiddleware from 'src/utils/validation/middleware';
import {
  permitAdminOnly,
  authMiddleware,
} from 'src/utils/validation/authMiddleware';

import * as jogController from 'src/modules/jog/controller';

import { RequestProperty } from 'src/enums/enums';

import jogSchema from 'src/modules/jog/validator';

const validateCreate = createValidationMiddleware(
  jogSchema,
  RequestProperty.BODY,
);
const validateUpdate = createValidationMiddleware(
  jogSchema,
  RequestProperty.BODY,
);

const router = express.Router();

router
  .route('/')
  .get(authMiddleware, permitAdminOnly, jogController.getAllJogs) // admin
  .post(authMiddleware, validateCreate, jogController.create);

router
  .route('/:id')
  .get(authMiddleware, jogController.getOne)
  .put(authMiddleware, validateUpdate, jogController.update)
  .delete(authMiddleware, jogController.remove);

export default router;
