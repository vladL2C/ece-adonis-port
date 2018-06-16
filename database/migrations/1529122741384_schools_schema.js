'use strict';

const Schema = use('Schema');

class SchoolsSchema extends Schema {
  up() {
    this.create('schools', table => {
      table.increments();
      table.string('name').unique();
      table.timestamps();
    });
  }

  down() {
    this.drop('schools');
  }
}

module.exports = SchoolsSchema;
