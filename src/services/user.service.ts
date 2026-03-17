// src/services/user.service.ts
import { UserRepository } from "../repositories/user.repository";

const userRepo = new UserRepository();

export class UserService {
  // ✅ Make sure `export` is in front of class
  async getAllUsers() {
    return await userRepo.getAllUsers();
  }

  async createUser(data: { name: string; email: string; age: number }) {
    return await userRepo.createUser(data);
  }
}
