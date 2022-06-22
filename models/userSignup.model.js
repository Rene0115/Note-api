import mongoose from 'mongoose';

const userSignup = mongoose.Schema({

  Email: {
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

export const Signup = mongoose.model('Signup', userSignup);

export default {
  Signup
};
