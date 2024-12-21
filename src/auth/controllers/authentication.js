import AuthService from '../services/authService.js';

class AuthController {
  static async register(req, res) {
    try {
      const user = await AuthService.register(req.body);
      res.status(201).json({ id: user.id, message: 'user registered' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async login(req, res) {
    try {
      const token = await AuthService.login(req.body);
      res.status(200).json({ token });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

export default AuthController;
