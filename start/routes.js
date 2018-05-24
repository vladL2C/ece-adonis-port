/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route');

Route.group(() => {
  Route.get('login', 'SessionController.login');
  Route.post('login', 'SessionController.create');
  Route.get('signup', 'UserController.signUp');
  Route.post('signup', 'UserController.create');
}).middleware(['guest']);

Route.on('/').render('static.index');
Route.get('logout', 'SessionController.logout');
