/* eslint-disable import/no-cycle */
import mongoose from 'mongoose';

const user = new mongoose.Schema({

  email: {
    type: 'String',
    required: true,
    minlength: 16
  },
  password: {
    type: 'String',
    required: true,
    minlength: 8
  }
}, { timestamps: true });

export const User = mongoose.model('User', user);

export default {
  User
};
