/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
import UserService from '../services/user.service.js';

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
  }
}

export default new UserController();
