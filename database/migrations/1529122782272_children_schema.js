'use strict';

const Schema = use('Schema');

class ChildrenSchema extends Schema {
  up() {
    this.create('children', table => {
      table.increments();
      table.integer('school_id');
      table.string('name');
      table.string('surname');
      table.date('birthdate');
      table.timestamps();
    });
  }

  down() {
    this.drop('children');
  }
}

module.exports = ChildrenSchema;
