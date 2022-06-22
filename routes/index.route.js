/* eslint-disable import/extensions */
import express from 'express';
import noteRoute from './notes.route.js';
import userRoute from './user.route.js';

const router = express.Router();

router.use('/notes', noteRoute);
router.post('/', userRoute);

export default router;
