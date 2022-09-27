/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
import { User } from '../models/user.model.js';

class UserService {
  async create(data) {
    const newUser = await User.create(data);
    return newUser;
  }

  async findByEmail(data) {
    const user = await User.findOne({ email: data.email });
    return user;
  }

  async fetch(data) {
    const users = await User.find({ data });
    return users;
  }

  async fetchById(id) {
    const user = await User.findById(id);
    return user;
  }

  async delete(id) {
    const user = await User.findByIdAndDelete(id);
    return user;
  }

  async update(id, data) {
    const user = await User.findByIdAndUpdate(id, data);
    return user;
  }
}

export default new UserService();
