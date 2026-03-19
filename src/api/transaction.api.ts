import { Router, Request, Response } from "express";
import mongoose from "mongoose";
import { UserService } from "../services/user.service";
import { CompanyService } from "../services/company.service";

const router = Router();
const userService = new UserService();
const companyService = new CompanyService();

/**
 * @swagger
 * /transaction:
 *   post:
 *     summary: Create user and company in a transaction
 */
router.post("/", async (req: Request, res: Response) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { user, company } = req.body;

    const newUser = await userService.createUser(user, session);
    const newCompany = await companyService.createCompany(company, session);

    await session.commitTransaction();

    res.status(201).json({
      message: "User and Company created successfully",
      user: newUser,
      company: newCompany,
    });
  } catch (err: any) {
    await session.abortTransaction();
    res.status(500).json({
      error: "Transaction failed",
      details: err.message,
    });
  } finally {
    session.endSession();
  }
});

/**
 * @swagger
 * /transaction:
 *   get:
 *     summary: Get all users and companies
 */
router.get("/", async (_req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsers();
    const companies = await companyService.getAllCompanies();

    res.json({ users, companies });
  } catch {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

/**
 * @swagger
 * /transaction/user/{id}:
 *   get:
 *     summary: Get user by ID
 */
router.get("/user/:id", async (req: Request, res: Response) => {
  try {
    const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const user = await userService.getUserById(id);

    if (!user) return res.status(404).json({ error: "User not found" });

    res.json(user);
  } catch {
    res.status(500).json({ error: "Failed to fetch user" });
  }
});

/**
 * @swagger
 * /transaction/company/{id}:
 *   get:
 *     summary: Get company by ID
 */
router.get("/company/:id", async (req: Request, res: Response) => {
  try {
    const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const company = await companyService.getCompanyById(id);

    if (!company) return res.status(404).json({ error: "Company not found" });

    res.json(company);
  } catch {
    res.status(500).json({ error: "Failed to fetch company" });
  }
});

/**
 * @swagger
 * /transaction/{userId}/{companyId}:
 *   put:
 *     summary: Update user and company together
 */
router.put("/:userId/:companyId", async (req: Request, res: Response) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const userId = Array.isArray(req.params.userId)
      ? req.params.userId[0]
      : req.params.userId;
    const companyId = Array.isArray(req.params.companyId)
      ? req.params.companyId[0]
      : req.params.companyId;

    const { user, company } = req.body;

    const updatedUser = await userService.updateUser(userId, user, session);
    const updatedCompany = await companyService.updateCompany(
      companyId,
      company,
      session,
    );

    await session.commitTransaction();

    res.json({ updatedUser, updatedCompany });
  } catch (err: any) {
    await session.abortTransaction();
    res.status(500).json({ error: err.message });
  } finally {
    session.endSession();
  }
});

/**
 * @swagger
 * /transaction/{userId}/{companyId}:
 *   delete:
 *     summary: Delete user and company together
 */
router.delete("/:userId/:companyId", async (req: Request, res: Response) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const userId = Array.isArray(req.params.userId)
      ? req.params.userId[0]
      : req.params.userId;
    const companyId = Array.isArray(req.params.companyId)
      ? req.params.companyId[0]
      : req.params.companyId;

    const deletedUser = await userService.deleteUser(userId, session);
    const deletedCompany = await companyService.deleteCompany(
      companyId,
      session,
    );

    await session.commitTransaction();

    res.json({ deletedUser, deletedCompany });
  } catch (err: any) {
    await session.abortTransaction();
    res.status(500).json({ error: err.message });
  } finally {
    session.endSession();
  }
});

export default router;
