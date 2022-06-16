/* eslint-disable class-methods-use-this */
import NoteService from '../services/note.service.js';

class NoteController {
  async create(req, res) {
    // return res.send('jhrfie')
    const newNote = await NoteService.create(req.body);
    return res.status(201).send({
      success: true,
      message: 'note creete',
      data: newNote
    });
  }
}
export default new NoteController();
