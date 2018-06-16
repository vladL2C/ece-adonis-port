'use strict';

const Schema = use('Schema');

class TeachersSchema extends Schema {
  up() {
    this.create('teachers', table => {
      table.increments();
      table.integer('school_id');
      table.integer('user_id');
      table.string('username').unique();
      table.string('password');
      table.string('email');
      table.timestamps();
    });
  }

  down() {
    this.drop('teachers');
  }
}

module.exports = TeachersSchema;
