/* eslint-disable import/no-cycle */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import express from 'express';
import noteRoute from './notes.routes.js';
import userRoute from './user.routes.js';

const router = express.Router();

router.use('/notes', noteRoute);
router.use('/users', userRoute);

export default router;
