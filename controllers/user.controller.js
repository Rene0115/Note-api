class UserController {
  async create(req, res) {
    return res.send('attempted to create');
  }
}

export default new UserController();