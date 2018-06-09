'use strict';

class AuthUser {
  async handle({ request }, next) {
    // call next to advance the request
    console.log('hello');
    await next();
  }
}

module.exports = AuthUser;
