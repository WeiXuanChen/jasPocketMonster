import express from 'express';
import EventModel from '../../../models/eventModel';

const router = express.Router();

router.post('/create', async (req, res) => {
  console.log('[CREATE EVENT]: ', req.body);
  const initUserModel = new EventModel({
    ...req.body,
    id: '000000000',
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

router.get('/list', async (req, res) => {
  console.log('[/api/event/list]');
  const events = await EventModel.find({});
  console.log('[events]: ', events);
  try {
    res.json(events);
  } catch (err) {
    res.json({
      isSuccess: false,
    });
  }
});

export default router;
