import express from 'express';
import { authMiddleware } from 'src/utils/validation/authMiddleware';

import * as controller from 'src/modules/auth/controller';

const router = express.Router();

router.route('/registration').post(controller.registration);

router.route('/login').post(controller.login);

router.route('/me').get(authMiddleware, controller.authMe);

export default router;
