import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import UserModel from '../models/userModel.js';

class AuthService {
    static async register(data) {
        const existingUser = await UserModel.findUserByEmail(data.email);
        if (existingUser) throw new Error('User already exists');

        const hashedPassword = await bcrypt.hash(data.password, 10);
        return await UserModel.create({ ...data, password: hashedPassword });
    }

    static async login(data) {
        const user = await UserModel.findUserByEmail(data.email);
        if (!user) throw new Error('Invalid credentials');

        const isMatch = await bcrypt.compare(data.password, user.password);
        if (!isMatch) throw new Error('Invalid credentials');

        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return token;
    }
}

export default AuthService;
