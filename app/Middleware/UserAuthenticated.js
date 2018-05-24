'use strict';

class UserAuthenticated {
  async handle({ auth, request, response }, next) {
    // call next to advance the request
    try {
      await auth.check();
      return response.redirect('/');
    } catch (e) {}
    await next();
  }
}

module.exports = UserAuthenticated;
