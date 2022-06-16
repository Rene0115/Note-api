import express from 'express';
import router from '../routes/index.route.js';
import database from '../config/database.config.js';
import errorMiddleware from './error.middleware.js';

const middleware = (app) => {
  database();
  app.use(express.json());
  app.use(router);

  app.use(errorMiddleware);
};

export default middleware;
