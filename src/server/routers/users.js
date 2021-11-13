import express from 'express';
import UserModel from '../../../models/userModel';

const router = express.Router();

router.post('/create', async (req, res) => {
  console.log('[CREATE USER ROUTER]: ', req.body);
  const initUserModel = new UserModel(req.body);
  initUserModel.save((err) => {
    if (err) {
      return console.log('[ERROR]: ', err);
    }
    // saved!
    return null;
  });
  res.json({
    isSuccess: true,
  });
});

router.post('/list', async (req, res) => {
  console.log('[GET USERS]');
  const users = await UserModel.find({});
  try {
    res.json(users);
  } catch (err) {
    res.json({
      isSuccess: false,
    });
  }
});

router.post('/delete', async (req, res) => {
  console.log('[delete USERS]');
  const result = await UserModel.find(req.body).remove();
  console.log('[result]: ', result);

  try {
    res.json(result);
  } catch (err) {
    res.json({
      isSuccess: false,
    });
  }
});

router.post('/login', async (req, res) => {
  const result = await UserModel.find({userName: req.body.account});

  try {
    if(result && result.length > 0 && result[0].userPassword === req.body.password) {
      res.json({
        login: 'success',
        useName: req.body.account,
      });
    }
    res.json({
      login: 'fail',
    });
  } catch (err) {
    res.json({
      isSuccess: false,
    });
  }
});

export default router;
