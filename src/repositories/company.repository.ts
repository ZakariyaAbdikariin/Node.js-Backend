// src/repositories/company.repository.ts
import { Company, ICompany } from "../models/company.model";

export class CompanyRepository {
  async getAll(): Promise<ICompany[]> {
    return Company.find();
  }

  async getById(id: string): Promise<ICompany | null> {
    return Company.findById(id);
  }

  async create(data: {
    companyName: string;
    companyEmail: string;
    companyAddress?: string;
  }): Promise<ICompany> {
    const company = new Company(data);
    return company.save();
  }

  async update(
    id: string,
    data: Partial<{
      companyName: string;
      companyEmail: string;
      companyAddress?: string;
    }>,
  ): Promise<ICompany | null> {
    return Company.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string): Promise<ICompany | null> {
    return Company.findByIdAndDelete(id);
  }
}
