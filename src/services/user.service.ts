import { UserRepository } from "../repositories/user.repository";
import { IUser } from "../models/user.model";

export class UserService {
  private repo = new UserRepository();

  getAllUsers() {
    return this.repo.getAll();
  }

  getUserById(id: string) {
    return this.repo.getById(id);
  }

  createUser(data: Partial<IUser>, session?: any) {
    return this.repo.create(data, session);
  }

  updateUser(id: string, data: Partial<IUser>, session?: any) {
    return this.repo.update(id, data, session);
  }

  deleteUser(id: string, session?: any) {
    return this.repo.delete(id, session);
  }
}
