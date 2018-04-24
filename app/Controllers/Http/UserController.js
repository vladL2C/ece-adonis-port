class UserController {
  signUp({ view }) {
    return view.render('user.signup');
  }

  async create({ response, request }) {

  }
}

module.exports = UserController;
