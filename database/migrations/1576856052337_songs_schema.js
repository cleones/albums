
/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class SongsSchema extends Schema {
  up() {
    this.create('songs', (table) => {
      table.increments();
      table.string('name');
      table.integer('album_id')
        .references('id')
        .inTable('albums')
        .onDelete('RESTRICT');
      table.timestamps();
    });
  }

  down() {
    this.drop('songs');
  }
}

module.exports = SongsSchema;
