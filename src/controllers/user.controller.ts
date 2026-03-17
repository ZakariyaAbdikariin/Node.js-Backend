// src/controllers/user.controller.ts
import { Request, Response } from "express";
import { UserService } from "../services/user.service";

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

  static async getById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const user = await userService.getUserById(Number(id));
      if (!user) return res.status(404).json({ error: "User not found" });
      res.json(user);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to fetch user" });
    }
  }

  static async create(req: Request, res: Response) {
    const { name, email, age } = req.body;
    try {
      const user = await userService.createUser({ name, email, age });
      res.status(201).json(user);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to create user" });
    }
  }

  static async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, email, age } = req.body;
    try {
      const updatedUser = await userService.updateUser(Number(id), {
        name,
        email,
        age,
      });
      if (!updatedUser)
        return res.status(404).json({ error: "User not found" });
      res.json(updatedUser);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to update user" });
    }
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const deleted = await userService.deleteUser(Number(id));
      if (!deleted) return res.status(404).json({ error: "User not found" });
      res.json({ message: "User deleted successfully" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to delete user" });
    }
  }
}
