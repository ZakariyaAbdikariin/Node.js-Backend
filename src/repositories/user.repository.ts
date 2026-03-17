// src/repositories/user.repository.ts
import { User } from "../models/user.model";

export class UserRepository {
  async getAllUsers() {
    return User.findAll();
  }

  async createUser(data: { name: string; email: string; age?: number }) {
    return User.create(data);
  }

  async getUserById(id: number) {
    return User.findByPk(id);
  }

  async updateUser(
    id: number,
    data: { name?: string; email?: string; age?: number },
  ) {
    const user = await User.findByPk(id);
    if (!user) return null;

    if (data.name !== undefined) user.name = data.name;
    if (data.email !== undefined) user.email = data.email;
    if (data.age !== undefined) user.age = data.age;

    await user.save();
    return user;
  }

  async deleteUser(id: number) {
    const deleted = await User.destroy({ where: { id } });
    return deleted > 0;
  }
}
