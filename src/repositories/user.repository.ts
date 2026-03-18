import { User, IUser } from "../models/user.model";

export class UserRepository {
  getAll(): Promise<IUser[]> {
    return User.find();
  }

  getById(id: string): Promise<IUser | null> {
    return User.findById(id);
  }

  create(data: Partial<IUser>, session?: any): Promise<IUser> {
    const user = new User(data);
    return user.save({ session });
  }

  update(id: string, data: Partial<IUser>, session?: any) {
    return User.findByIdAndUpdate(id, data, {
      new: true,
      session,
    });
  }

  delete(id: string, session?: any) {
    return User.findByIdAndDelete(id, { session });
  }
}
