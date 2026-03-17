// src/services/user.service.ts
import { UserRepository } from "../repositories/user.repository";

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async getAllUsers() {
    return this.userRepository.getAllUsers();
  }

  async getUserById(id: number) {
    return this.userRepository.getUserById(id);
  }

  async createUser(data: { name: string; email: string; age?: number }) {
    return this.userRepository.createUser(data);
  }

  async updateUser(
    id: number,
    data: { name?: string; email?: string; age?: number },
  ) {
    return this.userRepository.updateUser(id, data);
  }

  async deleteUser(id: number) {
    return this.userRepository.deleteUser(id);
  }
}
