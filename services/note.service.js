/* eslint-disable class-methods-use-this */
import { Note } from '../models/notes.model.js';

class NoteServivce {
  async create(data) {
    const newNote = new Note(data);
    await newNote.save();
    return newNote;
  }
}
export default new NoteServivce();
