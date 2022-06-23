/* eslint-disable import/no-cycle */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import express, { application, request } from 'express';
import noteRoute from './notes.route.js';
import userRoute from './user.route.js';
import app from './app.js';
import { User } from '../models/userRoute.model.js';
import { logger } from '../app.js';

const router = express.Router();

router.use('/notes', noteRoute);
router.use('/user', userRoute);

app.get('/login', (req, res) => {
  res.render('Form.js');
});

app.get('/Register', (req, res) => {
  res.render('register');
});

app.post('/Register', (req, res) => {
  const newUser = new User({
    Email: req.body.username,
    password: require.body.password
  });

  newUser.save((err) => {
    if (err) {
      logger.info(err);
    }
  });
});

export default router;

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
