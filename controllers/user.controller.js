class UserController {
  async create(req, res) {
    return await res.send('attempted to create');
  }
}

export default new UserController();