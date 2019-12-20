const Album = use('App/Models/Album');

class AlbumService {
  constructor() {
    this.model = Album;
  }

  async all() {
    const all = await this.model.all();
    return all;
  }

  async find(id) {
    const album = await this.model.find(id);
    return album;
  }

  async create(data) {
    const album = await this.model.create(data);
    return album;
  }

  async update(id, data) {
    const album = await this.model.find(id);
    album.merge(data);
    await album.save();
    return album;
  }

  async delete(id) {
    const album = await this.model.find(id);
    const deleted = await album.delete();
    return deleted;
  }
}

module.exports = AlbumService;
