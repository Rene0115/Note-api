import mongoose from 'mongoose';

const userSignup = mongoose.Schema({
    Username: {
        type: 'String',
        required: true,
        minlength: 5
    }
    Email: {
    type: 'String' ,
    required: true,
    minlength: 10
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
