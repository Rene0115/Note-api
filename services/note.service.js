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
    const notes = await Note.find({});
    return notes;
  }

  async fetchById(id) {
    const note = await Note.findById(id);
    return note;
  }
}
export default new NoteServivce();
