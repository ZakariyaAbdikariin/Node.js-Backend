import { UserRepository } from "../repositories/user.repository";

export class UserService {
  private repo = new UserRepository();

  getAllUsers() {
    return this.repo.getAll();
  }

  getUserById(id: string) {
    return this.repo.getById(id);
  }

  createUser(data: { name: string; email: string }) {
    return this.repo.create(data);
  }

  updateUser(id: string, data: Partial<{ name: string; email: string }>) {
    return this.repo.update(id, data);
  }

  deleteUser(id: string) {
    return this.repo.delete(id);
  }
}
