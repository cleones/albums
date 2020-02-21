
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
Route.post('/auth/register', 'AuthController.register');
Route.post('/auth/login', 'AuthController.login');
Route.get('/users', 'AuthController.listUser');

Route.get('/albums', 'AlbumController.index').middleware('auth');
Route.get('/albums/:id', 'AlbumController.show').middleware('auth');
Route.get('/albums/:id/songs', 'AlbumController.songs').middleware('auth');
Route.put('/albums/:id', 'AlbumController.update').middleware('auth');
Route.delete('/albums/:id', 'AlbumController.destroy').middleware('auth');
Route.post('/albums', 'AlbumController.store').middleware('auth');
