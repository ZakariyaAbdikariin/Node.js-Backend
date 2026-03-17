// src/repositories/user.repository.ts
import { User } from "../models/user.model";

export class UserRepository {
  async getAllUsers() {
    return await User.findAll();
  }

  async createUser(data: { name: string; email: string; age: number }) {
    return await User.create(data);
  }
}
