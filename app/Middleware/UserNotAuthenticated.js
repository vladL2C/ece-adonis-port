'use strict';

class UserNotAuthenticated {
  async handle({ auth, request }, next) {
    // call next to advance the request
    await next();
  }
}

module.exports = UserNotAuthenticated;
