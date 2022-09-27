/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import express from 'express';
import dotenv from 'dotenv';
import pino from 'pino';
import middleware from './middlewares/index.middlewares.js';
import 'express-async-errors';

const logger = pino();

dotenv.config();

const app = express();

middleware(app);

app.listen(process.env.PORT, () => {
  let port = process.env.PORT;
  if (port == null || port === '') {
    port = 8000;
  }

  logger.info(`Server is running on port ${port}`);
});

export default logger;
