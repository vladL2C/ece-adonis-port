'use strict';

const User = use('App/Models/User');
const { validateAll } = use('Validator');

class UserController {
  signUp({ view }) {
    return view.render('user.signup');
  }

  async create({ session, response, request }) {
    const data = request.only([
      'username',
      'email',
      'password',
      'password_confirmation'
    ]);

    const rules = {
      username: 'required|unique:users',
      email: 'required|email|unique:users',
      password: 'required',
      password_confirmation: 'required_if:password|same:password'
    };

    const validation = await validateAll(data, rules);

    if (validation.fails()) {
      session.withErrors(validation.messages()).flashExcept(['password']);
      return response.redirect('back');
    }

    delete data.password_confirmation;
    await User.create(data);
    return response.redirect('/');
  }
}

module.exports = UserController;
