// src/services/company.service.ts
import { CompanyRepository } from "../repositories/company.repository";
import { ICompany } from "../models/company.model";

export class CompanyService {
  private repo = new CompanyRepository();

  // Get all companies
  getAllCompanies() {
    return this.repo.getAll();
  }

  // Get one company by ID
  getCompanyById(id: string) {
    return this.repo.getById(id);
  }

  // Create a company
  createCompany(data: {
    companyName: string;
    companyEmail: string;
    companyAddress?: string; // optional
  }) {
    return this.repo.create(data);
  }

  // Update a company
  updateCompany(
    id: string,
    data: Partial<{
      companyName: string;
      companyEmail: string;
      companyAddress?: string;
    }>,
  ) {
    return this.repo.update(id, data);
  }

  // Delete a company
  deleteCompany(id: string) {
    return this.repo.delete(id);
  }
}
