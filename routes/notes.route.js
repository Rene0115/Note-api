import express from 'express';
import noteConrtroller from '../controllers/note.conrtroller.js';

const noteRoute = express.Router();
noteRoute.post('/', noteConrtroller.create);
export default noteRoute;
