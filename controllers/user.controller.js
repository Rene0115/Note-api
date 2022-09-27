/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
import _ from 'lodash';
import bcrypt from 'bcrypt';
import userService from '../services/user.service.js';
import logger from '../app.js';

class UserController {
  async create(req, res) {
    const user = userService.findByEmail(req.body.email);

    if (!_.isEmpty(user)) {
      return res.status(409).send({
        success: false,
        message: 'User already exists'
      });
    }
    const saltRounds = 10;
    const hashPassword = await bcrypt.hash(req.body.password, saltRounds);
    const data = { email: req.body.email, password: hashPassword };
    const newUser = await userService.create(data);

    logger.info('User...', newUser);

    // const token = 'tokens';

    return res.status(201).send({
      success: true,
      message: 'User created',
      data: newUser
    });
  }

  async login(req, res) {
    const user = userService.findByEmail(req.body);
    const verifyPassword = bcrypt.compareSync(req.body.password, user.password);
    if (!verifyPassword) {
      return res.status(404).send({
        success: false,
        message: 'email or password is invalid'
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
