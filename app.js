/* eslint-disable import/prefer-default-export */
import express from 'express';
import dotenv from 'dotenv';
import pino from 'pino';
import middleware from './middlewares/index.middlewares.js';

export const logger = pino();

dotenv.config();

const app = express();

middleware(app);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  logger.info(`Server is running on port  ${PORT}`);
});
