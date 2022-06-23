/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import express from 'express';
import dotenv from 'dotenv';
import pino from 'pino';
import middleware from './middlewares/index.middlewares.js';
import 'express-async-errors';
import { User } from './models/user.model.js';

export const logger = pino();

dotenv.config();

const app = express();

middleware(app);
const PORT = process.env.PORT || 3000;

app.post('/Register', (req, res) => {
  const newUser = new User({
    email: req.body.email,
    password: req.body.password
  });

  newUser.save((err) => {
    if (err) {
      logger.info(err);
      return res.status(400).send({
        message: err.message
      });
    }
    res.status(200).send('Success');
  });
});

app.post('/login', (req, res) => {
  const { username } = req.body;
  const { password } = req.body;

  User.findOne({ email: username }, (err, foundUser) => {
    if (err) {
      logger.info(err);
    } else if (foundUser) {
      if (foundUser.password === password) {
        res.status(200).send('Authentication successful');
      }
    }
  });
});

app.listen(PORT, () => {
  logger.info(`Server is running on port  ${PORT}`);
});
