'use strict';

const Model = use('Model');

class Teacher extends Model {
  user() {
    this.belongsTo('App/Models/User');
  }

  school() {
    this.belongsTo('App/Models/School');
  }

  children() {
    this.belongsToMany('App/Models/Child')
      .pivotTable('chilren_teachers')
      .withTimestamps();
  }
}

module.exports = Teacher;
