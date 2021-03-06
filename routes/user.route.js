/* eslint-disable import/extensions */
import express from 'express';
import userController from '../controllers/user.controller.js';

const userRoute = express.Router();
userRoute.post('/', userController.create);
userRoute.post('/login', userController.login);

export default userRoute;
