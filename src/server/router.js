import express from 'express';
import eventRouter from './routers/events';
import userRouter from './routers/users';

const router = express.Router();

router.use('/event', eventRouter);
router.use('/user', userRouter);

export default router;
