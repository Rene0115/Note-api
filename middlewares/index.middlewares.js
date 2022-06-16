import express from 'express';
import router from '../routes/index.route.js';
import database from '../config/database.config.js'

const middleware = (app) => {
    database();
  app.use(express.json());
  app.use(router);
};

export default middleware;
