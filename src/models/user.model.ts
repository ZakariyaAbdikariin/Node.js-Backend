// src/models/user.model.ts
import mongoose, { Schema, Document } from "mongoose";

// ✅ Export interface
export interface IUser extends Document {
  name: string;
  email: string;
}

// ✅ Define schema
const userSchema: Schema<IUser> = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
  },
  { timestamps: true },
);

// ✅ Export model
export const User = mongoose.model<IUser>("User", userSchema);
