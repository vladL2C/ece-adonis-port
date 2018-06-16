'use strict';

const Schema = use('Schema');

class ChildrenTeacherSchema extends Schema {
  up() {
    this.create('children_teachers', table => {
      table.increments();
      table.integer('teacher_id');
      table.integer('children_id');
      table.timestamps();
    });
  }

  down() {
    this.drop('children_teachers');
  }
}

module.exports = ChildrenTeacherSchema;
