import express from 'express';
import ShopModel from '../../../models/shopModel';

const router = express.Router();

router.post('/create', async (req, res) => {
  console.log('[CREATE SHOP ROUTER]: ', req.body);
  const initUserModel = new ShopModel({
    ...req.body,
    userId: '000000000',
  });
  initUserModel.save((err) => {
    if (err) {
      return res.json({
        isSuccess: false,
      });
    }
    // saved!
    return res.json({
      isSuccess: true,
    });
  });
});

router.post('/get', async (req, res) => {
  const shops = await ShopModel.find({});
  try {
    res.json(shops);
  } catch (err) {
    res.json({
      isSuccess: false,
    });
  }
});

// eslint-disable-next-line no-unused-vars
router.post('/delete', async (req, res) => {
  console.log('[DELETE SHOP ROUTER]: ', req.body);
  // findByIdAndDelete
});

export default router;
