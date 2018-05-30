class SessionController {
  login({ view }) {
    return view.render('session.create');
  }

  async create({ session, auth, request, response }) {
    const data = request.only(['email', 'password', 'checkbox']);
    try {
      await auth.remember(true).attempt(data.email, data.password);
    } catch (e) {
      session.flashExcept(['password']);
      session.flash({
        error: 'We cannot find any account with these credentials.'
      });

      return response.redirect('login');
    }
    const user = auth.user;
    const token = await auth.authenticator('jwt').generate(user);
    //TODO: JWT TOKENS DO NOT NEED TO BE STORED IN THE DB
    //AS THE PAYLOAD Lets the DB know who the user is this is how the api calls are made
    // and the user is authenticated!!!
    console.log(token);
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
