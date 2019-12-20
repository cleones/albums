
const Album = use('App/Models/Album');
const AlbumService = use('App/Service/AlbumService');

const { test } = use('Test/Suite')('AlbumServiceTest');


test('Album service find', async ({ assert }) => {
  const album = new Album();
  const service = new AlbumService();
  album.name = 'name';
  album.artist = 'artist';
  await album.save();
  assert.equal(album.name, (await service.find(album.id)).name);
});
