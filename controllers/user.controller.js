/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
import _ from 'lodash';
import bcrypt from 'bcrypt';
import userService from '../services/user.service.js';

class UserController {
  async create(req, res) {
    const user = await userService.findByEmail(req.body);

    if (!_.isEmpty(user)) {
      return res.status(409).send({
        success: false,
        message: 'User already exists'
      });
    }

    const data = { email: req.body.email, password: bcrypt.hashSync(req.body.password, 8) };
    if (_.isEmpty(data.email || data.password)) {
      return res.status(404).send({
        message: 'email and password are required'
      });
    }
    const newUser = await userService.create(data);

    return res.status(201).send({
      success: true,
      message: 'User created',
      data: newUser
    });
  }

  async login(req, res) {
    const user = await userService.findByEmail(req.body);
    if (_.isEmpty(user)) {
      return res.status(404).send({
        message: 'User not found'
      });
    }
    console.log(req.body.password, user.password);
    const verifyPassword = bcrypt.compareSync(req.body.password, user.password);
    if (!verifyPassword) {
      return res.status(404).send({
        success: false,
        message: 'email or password is invalid'
      });
    }

    // generate auth token
    // const token = 'token';

    // return res.header('token', token).status(200).send({
    //   success: true,
    //   message: 'success',
    //   data: token
    // });
  }
}

export default new UserController();
