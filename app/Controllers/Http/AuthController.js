/* eslint-disable class-methods-use-this */

const User = use('App/Models/User');
class AuthController {
  async register({ request, response }) {
    const data = request.only(['username', 'email', 'password']);

    const user = await User.create(data);
    response.json(user);
  }

  async listUser({ response }) {
    const all = await User.all();

    response.json(all);
  }

  async login({ request, auth, response }) {
    const email = request.input('email');
    const password = request.input('password');
    try {
      if (await auth.attempt(email, password)) {
        const user = await User.findBy('email', email);
        const accessToken = await auth.generate(user);
        response.json(accessToken);
      }
    } catch (e) {
      response.json({ message: 'You first need to register!' });
    }
  }
}

module.exports = AuthController;
