/* eslint-disable class-methods-use-this */
import { Note } from '../models/notes.model.js';

class NoteServivce {
  async create(data) {
    try {
      const newNote = await Note.create(data);
      return newNote;
    } catch (error) {
      return error.message;
    }
  }

  async fetch(data) {
    const notes = await Note.find({ data });
    return notes;
  }

  async fetchById(id) {
    const note = await Note.findById(id);
    return note;
  }

  async delete(id) {
    const notee = await Note.findByIdAndDelete(id);
    return notee;
  }

  async update(id, data) {
    const note = await Note.findByIdAndUpdate(id, data);
    return note;
  }
}

export default new NoteServivce();
