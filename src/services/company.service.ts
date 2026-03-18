import { CompanyRepository } from "../repositories/company.repository";
import { ICompany } from "../models/company.model";

export class CompanyService {
  private repo = new CompanyRepository();

  getAllCompanies() {
    return this.repo.getAll();
  }

  getCompanyById(id: string) {
    return this.repo.getById(id);
  }

  createCompany(data: Partial<ICompany>, session?: any) {
    return this.repo.create(data, session);
  }

  updateCompany(id: string, data: Partial<ICompany>, session?: any) {
    return this.repo.update(id, data, session);
  }

  deleteCompany(id: string, session?: any) {
    return this.repo.delete(id, session);
  }
}
