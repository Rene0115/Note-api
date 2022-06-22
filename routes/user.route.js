/* eslint-disable import/extensions */
import express from 'express';
import userController from '../controllers/user.controller.js';

const userRoute = express.Router();
userRoute.post('/', userController.create);
userRoute.get('/', userController.find);
userRoute.get('/:id', userController.findById);
userRoute.delete('/', userController.delete);
userRoute.put('/:id', userController.update);

export default userRoute;
