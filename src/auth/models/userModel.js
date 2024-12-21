import db from '../../config/db.js';

export default class UserModel {
  static async create(userData) {
    const [newUser] = await db('users').insert(userData).returning('*');
    return newUser;
  }

  static async findUserByEmail(email) {
    const user = await db('users').where({ email }).first();
    return user;
  }
}
