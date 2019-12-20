
/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.get('/', () => ({ greeting: 'Hello world in JSON' }));
Route.get('/albums', 'AlbumController.index');
Route.get('/albums/:id', 'AlbumController.show');
Route.put('/albums/:id', 'AlbumController.update');
Route.delete('/albums/:id', 'AlbumController.destroy');
Route.post('/albums', 'AlbumController.store');
