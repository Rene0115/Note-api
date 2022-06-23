import mongoose from 'mongoose';

const user = mongoose.Schema({

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

export const User = mongoose.model('Signup', user);

export default {
  User
};
