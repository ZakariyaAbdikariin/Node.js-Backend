// src/models/company.model.ts
import mongoose, { Schema, Document } from "mongoose";

// ✅ Export interface
export interface ICompany extends Document {
  companyName: string;
  companyEmail: string;
  companyAddress: string;
}

// ✅ Define schema
const companySchema: Schema<ICompany> = new Schema(
  {
    companyName: { type: String, required: true },
    companyEmail: { type: String, required: true, unique: true },
    companyAddress: { type: String, },
  },
  { timestamps: true },
);

// ✅ Export model
export const Company = mongoose.model<ICompany>("Company", companySchema);
