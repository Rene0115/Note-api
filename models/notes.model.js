import mongoose from 'mongoose';

const noteSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 2
  },
  content: {
    type: String,
    required: true,
    minlength: 10
  }
}, { timestamps: true });

export const Note = mongoose.model('Note', noteSchema);

export default {
  Note
};
