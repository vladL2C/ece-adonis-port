'use strict';

class AuthUser {
  async handle({ request }, next) {
    // call next to advance the request
    //auth stuff before each request :D
    await next();
  }
}

module.exports = AuthUser;
