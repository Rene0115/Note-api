import mongoose from 'mongoose';

const userLogin = mongoose.Schema({
  Email: {
    type: String,
    required: true,
    minlength: 2
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  }
}, { timestamps: true });

export const Login = mongoose.model('Login', userLogin);

export default {
  Login
};
