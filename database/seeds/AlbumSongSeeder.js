
/*
|--------------------------------------------------------------------------
| AlbumSongSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');

class AlbumSongSeeder {
  // eslint-disable-next-line class-methods-use-this
  async run() {
    await Factory.model('App/Models/Album').createMany(10);
    await Factory.model('App/Models/Song').createMany(10);
  }
}

module.exports = AlbumSongSeeder;
