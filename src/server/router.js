import express from 'express';
import usersRouter from './routers/users';
import shopRouter from './routers/shops';

const router = express.Router();

router.use('/user', usersRouter);
router.use('/shop', shopRouter);

export default router;
