/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
import NoteService from '../services/note.service.js';

class NoteController {
  async create(req, res) {
    const data = { title: req.body.title, content: req.body.content };
    const newNote = await NoteService.create(data);
    if (typeof (newNote) === 'string') {
      return res.status(400).send({
        success: false,
        message: newNote
      });
    }
    return res.status(201).send({ status: true, body: newNote });
  }

  async find(req, res) {
    const data = await NoteService.fetch();
    return res.status(201).send({ status: true, body: data });
  }

  async findById(req, res) {
    const data = await NoteService.fetchById(req.params.id);
    return res.status(201).send({ status: true, body: data });
  }

  async delete(req, res) {
    const data = await NoteService.delete(req.params.id);
    return res.status(201).send({ status: true, body: data });
  }

  async update(req, res) {
    const data = { title: req.body.title, content: req.body.content };
    const newNote = await NoteService.update(req.params.id, data);
    return res.status(201).send({ status: true, body: newNote });
  }
}
export default new NoteController();
