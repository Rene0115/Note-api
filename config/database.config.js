import mongoose from 'mongoose';
import { logger } from '../app.js';

export default () => {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => {
      logger.info('Connected to the database...');
    })
    .catch((error) => {
      logger.info('Error connectring to database');
      logger.error(error);
    });
};
