
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
const AlbumService = use('App/Service/AlbumService');

class AlbumController {
  constructor() {
    this.albumService = new AlbumService();
  }

  /**
   * Show a list of all albums.
   * GET albums
   *
   * @param {object} ctx
   * @param {Response} ctx.response
   */
  async index({ response }) {
    const all = await this.albumService.all();
    response.json(all);
  }

  /**
   * Create/save a new album.
   * POST albums
   *
   * @param {object} ctx
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const data = request.only(['name', 'artist']);

    const album = await this.albumService.create(data);

    response.json(album);
  }

  /**
   * Display a single album.
   * GET albums/:id
   *
   * @param {object} ctx
   * @param {Response} ctx.response
   */
  async show({ params, response }) {
    const album = await this.albumService.find(params.id);
    response.json(album);
  }

  /**
   * Update album details.
   * PUT or PATCH albums/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const data = request.all();
    const album = await this.albumService.update(params.id, data);
    response.json(album);
  }

  /**
   * Delete a album with id.
   * DELETE albums/:id
   *
   * @param {object} ctx
   * @param {Response} ctx.response
   */
  async destroy({ params, response }) {
    const deleted = await this.albumService.delete(params.id);
    response.json(deleted);
  }
}

module.exports = AlbumController;
