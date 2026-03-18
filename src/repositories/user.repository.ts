import { User, IUser } from "../models/user.model";

export class UserRepository {
  async getAll(): Promise<IUser[]> {
    return User.find();
  }

  async getById(id: string): Promise<IUser | null> {
    return User.findById(id);
  }

  async create(data: { name: string; email: string }): Promise<IUser> {
    const user = new User(data);
    return user.save();
  }

  async update(id: string, data: Partial<IUser>): Promise<IUser | null> {
    return User.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string): Promise<IUser | null> {
    return User.findByIdAndDelete(id);
  }
}
