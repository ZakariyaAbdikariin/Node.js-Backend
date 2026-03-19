import { Router } from "express";
import { UserController } from "../controllers/user.controller";

const router = Router();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 */
router.get("/", UserController.getAll);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get user by ID
 */
router.get("/:id", UserController.getById);

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create user
 */
router.post("/", UserController.create);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Update user
 */
router.put("/:id", UserController.update);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Delete user
 */
router.delete("/:id", UserController.delete);

export default router;
