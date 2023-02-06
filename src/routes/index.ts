import { Router } from 'express';

import userRouter from 'src/modules/user/router'
import jogRouter from 'src/modules/jog/router'
import authRouter from 'src/modules/auth/router'

const router = Router();

router.use('/users', userRouter);
router.use('/jogs', jogRouter);
router.use('/auth', authRouter);

export default router;

