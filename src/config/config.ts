import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const config = {
  server: {
    port: Number(process.env.PORT) || 8080,
  },
  db: {
    uri: process.env.MONGO_URI || "mongodb://127.0.0.1:27017/hospital",
  },
};

// ✅ IMPORTANT: use FUNCTION export (not const)
export async function connectDB() {
  try {
    await mongoose.connect(config.db.uri);
    console.log("✅ MongoDB connected!");
  } catch (err) {
    console.error("❌ Failed to connect to MongoDB:", err);
    process.exit(1);
  }
}
