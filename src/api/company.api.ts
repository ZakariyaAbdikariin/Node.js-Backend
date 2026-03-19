import { Router } from "express";
import { CompanyController } from "../controllers/company.controller";

const router = Router();

/**
 * @swagger
 * /companies:
 *   get:
 *     summary: Get all companies
 */
router.get("/", CompanyController.getAll);

/**
 * @swagger
 * /companies/{id}:
 *   get:
 *     summary: Get company by ID
 */
router.get("/:id", CompanyController.getById);

/**
 * @swagger
 * /companies:
 *   post:
 *     summary: Create company
 */
router.post("/", CompanyController.create);

/**
 * @swagger
 * /companies/{id}:
 *   put:
 *     summary: Update company
 */
router.put("/:id", CompanyController.update);

/**
 * @swagger
 * /companies/{id}:
 *   delete:
 *     summary: Delete company
 */
router.delete("/:id", CompanyController.delete);

export default router;
