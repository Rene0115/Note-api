/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
import _ from 'lodash';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
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

    const verifyPassword = bcrypt.compareSync(req.body.password, user.password);
    if (!verifyPassword) {
      return res.status(404).send({
        success: false,
        message: 'email or password is invalid'
      });
    }
    const token = jwt.sign({ _id: user._id, email: user.email }, process.env.TOKEN, { expiresIn: '200h', algorithm: 'HS512' });
    return res.status(200).send({
      success: true,
      body: {
        message: 'user logged in successfully',
        token,
        data: user
      }
    });
  }

  async getAllUsers(req, res) {
    const users = await userService.fetch();
    if (_.isEmpty(users)) {
      return res.status(200).send({
        success: true,
        message: 'No users exist in the database'
      });
    }
    return res.status(200).send({
      success: true,
      data: users
    });
  }
}

export default new UserController();
