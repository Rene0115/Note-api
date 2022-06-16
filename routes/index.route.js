import express from 'express';
import noteRoute from './notes.route.js';

const router = express.Router();

router.use('/notes', noteRoute);

export default router;
