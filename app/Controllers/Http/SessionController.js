class SessionController {
  login({ view }) {
    return view.render('session.create');
  }

  async create({ session, auth, request, response }) {
    const data = request.only(['email', 'password']);

    try {
      await auth.check();
      return response.redirect('/');
    } catch (error) {}

    try {
      await auth.remember(true).attempt(data.email, data.password);
    } catch (e) {
      session.flashExcept(['password']);
      session.flash({
        error: 'We cannot find any account with these credentials.'
      });
      return response.redirect('login');
    }
    return response.redirect('/');
  }

  async logout({ session, auth, response }) {
    await auth.logout();
    session.flash({
      loggedOut: 'You have logged out.'
    });
    return response.redirect('/');
  }
}

module.exports = SessionController;
