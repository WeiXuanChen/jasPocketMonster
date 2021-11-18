import express from 'express';
import UserModel from '../../../models/userModel';

const router = express.Router();

router.post('/create', async (req, res) => {
  console.log('[CREATE USER ROUTER]');
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

  try {
    res.json(result);
  } catch (err) {
    res.json({
      isSuccess: false,
    });
  }
});

router.post('/update', async (req, res) => {
  console.log('[update USERS]');
  const result = await UserModel.findOneAndUpdate(
    { userName: req.body.userName },
    req.body
  );

  try {
    if (result) {
      res.json({
        isSuccess: true,
      });
    } else {
      res.json({
        isSuccess: false,
      });
    }
  } catch (err) {
    res.json({
      isSuccess: false,
    });
  }
});

router.post('/wishList', async (req, res) => {
  const result = await UserModel.find(req.body);
  console.log('[GET WISHLIST]');

  try {
    if (result && result.length > 0) {
      res.json({
        data: result[0].wishList,
      });
    }
  } catch (err) {
    res.json({
      isSuccess: false,
    });
  }
});

router.post('/buyList', async (req, res) => {
  const result = await UserModel.find(req.body);
  console.log('[GET BuyList]');

  let updateResult = {};
  if(result.length === 0) {
    const userList = await UserModel.find({});
    const chooseOne = userList.find((el) => el.userName !== req.body.buyerName && (!el.buyerName || el.buyerName === null));
    chooseOne.buyerName = req.body.buyerName;
    updateResult = await UserModel.findOneAndUpdate(
      { userName: chooseOne.userName },
      chooseOne,
    );
  }

  try {
    if (result && result.length > 0) {
      res.json({
        data: result[0].wishList,
      });
    } else if (updateResult) {
      res.json({
        data: updateResult.wishList,
      });
    }
  } catch (err) {
    console.log('[err]: ', err);
    res.json({
      isSuccess: false,
    });
  }
});

router.post('/login', async (req, res) => {
  const result = await UserModel.find({ userName: req.body.account });

  try {
    if (
      result &&
      result.length > 0 &&
      result[0].userPassword === req.body.password
    ) {
      res.json({
        login: 'success',
        userName: req.body.account,
      });
    }
  } catch (err) {
    res.json({
      isSuccess: false,
    });
  }
});

export default router;
