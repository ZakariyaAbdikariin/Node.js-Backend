// src/controllers/company.controller.ts
import { Request, Response } from "express";
import { CompanyService } from "../services/company.service";

const companyService = new CompanyService();

export class CompanyController {
  // GET /api/companies
  static async getAll(req: Request, res: Response) {
    try {
      const companies = await companyService.getAllCompanies();
      res.json(companies);
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch companies" });
    }
  }

  // GET /api/companies/:id
  static async getById(req: Request, res: Response) {
    try {
      const id = Array.isArray(req.params.id)
        ? req.params.id[0]
        : req.params.id;
      const company = await companyService.getCompanyById(id);
      if (!company) return res.status(404).json({ error: "Company not found" });
      res.json(company);
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch company" });
    }
  }

  // POST /api/companies
  static async create(req: Request, res: Response) {
    try {
      const company = await companyService.createCompany(req.body);
      res.status(201).json(company);
    } catch (err: any) {
      if (err.code === 11000) {
        return res.status(400).json({ error: "Email already exists" });
      }
      res.status(500).json({ error: "Failed to create company" });
    }
  }

  // PUT /api/companies/:id
  static async update(req: Request, res: Response) {
    try {
      const id = Array.isArray(req.params.id)
        ? req.params.id[0]
        : req.params.id;
      const company = await companyService.updateCompany(id, req.body);
      if (!company) return res.status(404).json({ error: "Company not found" });
      res.json(company);
    } catch (err) {
      res.status(500).json({ error: "Failed to update company" });
    }
  }

  // DELETE /api/companies/:id
  static async delete(req: Request, res: Response) {
    try {
      const id = Array.isArray(req.params.id)
        ? req.params.id[0]
        : req.params.id;
      const company = await companyService.deleteCompany(id);
      if (!company) return res.status(404).json({ error: "Company not found" });
      res.json({ message: "Company deleted successfully" });
    } catch (err) {
      res.status(500).json({ error: "Failed to delete company" });
    }
  }
}
