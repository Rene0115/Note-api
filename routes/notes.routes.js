/* eslint-disable import/extensions */
import express from 'express';
import noteConrtroller from '../controllers/note.controller.js';

const noteRoute = express.Router();
noteRoute.post('/newlist', noteConrtroller.create);
noteRoute.get('/', noteConrtroller.find);
noteRoute.get('/:id', noteConrtroller.findById);
noteRoute.delete('/:id', noteConrtroller.delete);
noteRoute.put('/:id', noteConrtroller.update);

export default noteRoute;
