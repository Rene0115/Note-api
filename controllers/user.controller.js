import UserService from '../services/user.service';

class UserController {
  async create(req, res) {
    const data = { Email: req.body.Email, password: req.body.password };
    const newUser = await UserService.create(data);
    if (typeof (newUser) === 'string') {
      return res.status(400).send({
        success: false,
        message: newUser
      });
    }
    return res.status(201).send({ status: true, body: newUser });
  }

  async find(req, res) {
    const data = await UserService.fetch();
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
