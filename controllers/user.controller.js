/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
import _ from 'lodash';
import bcrypt from 'bcrypt';
import UserService from '../services/user.service.js';
import logger from '../app.js';

const saltRounds = 10;

class UserController {
  async create(req, res) {
    const user = UserService.findByEmail(req.body.email);

    if (!_.isEmpty(user)) {
      return res.status(409).send({
        success: false,
        message: 'User already exists'
      });
    }
    // return res.send(req.body);
    const hashPassword = await bcrypt.hash(req.body.password, saltRounds);
    const data = { email: req.body.email, password: hashPassword };
    const newUser = await UserService.create(data);

    logger.info('User...', newUser);

    // const token = 'tokens';

    return res.status(201).send({
      success: true,
      message: 'User created',
      data: newUser
    });
  }

  async login(req, res) {
    bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
      const data = req.body;
      const { email, password } = data;
      const user = UserService.findByEmail(email);
      if (_.isEmpty(user)
      || !email.includes('@')
      || !email.includes('.')) {
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
    });
  }
}
export default new UserController();
