import { Company, ICompany } from "../models/company.model";

export class CompanyRepository {
  getAll(): Promise<ICompany[]> {
    return Company.find();
  }

  getById(id: string): Promise<ICompany | null> {
    return Company.findById(id);
  }

  create(data: Partial<ICompany>, session?: any): Promise<ICompany> {
    const company = new Company(data);
    return company.save({ session });
  }

  update(id: string, data: Partial<ICompany>, session?: any) {
    return Company.findByIdAndUpdate(id, data, {
      new: true,
      session,
    });
  }

  delete(id: string, session?: any) {
    return Company.findByIdAndDelete(id, { session });
  }
}
