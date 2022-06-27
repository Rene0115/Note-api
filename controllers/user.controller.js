/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
import _ from 'lodash';
import UserService from '../services/user.service.js';
import md5 from 'md5';

class UserController {
  async create(req, res) {
    // return res.send(req.body);
    const data = { email: req.body.email, password: md5(req.body.password) };
    const user = await UserService.findByEmail(req.body.email);

    if (!_.isEmpty(user)) {
      return res.status(409).send({
        success: false,
        message: 'User already exists'
      });
    }
    const newUser = await UserService.create(data);

    // const token = 'tokens';

    return res.status(201).send({
      success: true,
      message: 'User created',
      data: newUser
    });
  }

  async login(req, res) {
    const { email } = req.body;
    const { password } = req.body;

    const user = await UserService.findByEmail(email);

    if (_.isEmpty(user)) {
      return res.send({
        success: false,
        message: 'Invalid email or password'
      });
    }

    if (user.password !== password) {
      return res.status(400).send({
        success: false,
        message: 'Invalid email or password'
      });
    }

    // generate auth token
    const token = 'token';

    return res.header('token', token).status(200).send({
      success: true,
      message: 'success',
      data: token
    });
  }
}
export default new UserController();
