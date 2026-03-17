import { Request, Response } from "express";
import { UserService } from "../services/user.service"; // ✅ path must match file

const userService = new UserService();

export class UserController {
  static async getAll(req: Request, res: Response) {
    try {
      const users = await userService.getAllUsers();
      res.json(users);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to fetch users" });
    }
  }

  static async create(req: Request, res: Response) {
    try {
      const user = await userService.createUser(req.body);
      res.status(201).json(user);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to create user" });
    }
  }
}
