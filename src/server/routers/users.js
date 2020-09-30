import express from 'express';
// import UserModel from '../../../models/userModel';

const router = express.Router();

router.post('/create', async (req, res) => {
  console.log('[CREATE USERS ROUTER]: ', req.body);
  // const initUserModel = new UserModel(req.body);
  // initUserModel.save((err) => {
  //   if (err) {
  //     return console.log('[ERROR]: ', err);
  //   }
  //   // saved!
  //   return null;
  // });
  res.json({
    isSuccess: true,
  });
});

export default router;
