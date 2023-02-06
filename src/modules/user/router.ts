import express from 'express';
import {
  permitAdminOnly,
  authMiddleware,
} from 'src/utils/validation/authMiddleware';

import createValidationMiddleware from 'src/utils/validation/middleware';

import * as userController from 'src/modules/user/controller';

import { userSchema, updateUserSchema } from 'src/modules/user/validator';

import { RequestProperty } from 'src/enums/enums';

const validateCreate = createValidationMiddleware(
  userSchema,
  RequestProperty.BODY,
);
const validateUpdate = createValidationMiddleware(
  updateUserSchema,
  RequestProperty.BODY,
);

const router = express.Router();

router
  .route('/')
  .get(authMiddleware, permitAdminOnly, userController.getAllUsers) // admin
  .post(authMiddleware, permitAdminOnly, validateCreate, userController.create); // admin

router
  .route('/:id')
  .get(authMiddleware, permitAdminOnly, userController.getOne) // admin
  .put(authMiddleware, validateUpdate, userController.update)
  .delete(authMiddleware, userController.remove);

router.route('/:id/jogs').get(authMiddleware, userController.getAllUsersJogs);

export default router;
