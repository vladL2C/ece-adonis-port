'use strict';

const Model = use('Model');

class School extends Model {
  chilren() {
    return this.hasMany('App/Models/Child');
  }

  Teachers() {
    return this.hasMany('App/Models/Teacher');
  }
}

module.exports = School;
