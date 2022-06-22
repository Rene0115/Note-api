/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import router from '../routes/index.route.js';
import database from '../config/database.config.js';
import errorMiddleware from './error.middleware.js';

const middleware = (app) => {
  database();
  app.use(express.json());
  app.use(morgan('dev'));
  app.use(cors());
  app.use(router);

  app.use(errorMiddleware);
};

export default middleware;
