'use strict';

const Model = use('Model');

class Child extends Model {
  school() {
    this.belongsTo('App/Models/School');
  }

  teachers() {
    this.belongsToMany('App/models/Teacher')
      .pivotTable('chilren_teachers')
      .withTimestamps();
  }
}

module.exports = Child;
