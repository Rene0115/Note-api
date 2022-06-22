import express from 'express';
 
const userRoute = express.Router()
userRoute.post('/', userController.create);
userRoute.get('/', nuserControllerfind);
userRoute.get('/:id',userControllerer.findById);
userRoute.delete('/',userControlleroller.delete);
userRoute.put('/:id',userControllerer.update);
