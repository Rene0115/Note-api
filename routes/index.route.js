/* eslint-disable import/no-cycle */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import express, { application, request } from 'express';
import noteRoute from './notes.route.js';
import userRoute from './user.route.js';

const router = express.Router();

router.use('/notes', noteRoute);
router.use('/users', userRoute);

export default router;
