// src/server.ts
import app from "./app";
import mongoose from "mongoose";
import { config } from "./config/config";

const startServer = async () => {
  try {
    const mongoUri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/hospital";

    // Connect to MongoDB
    await mongoose.connect(mongoUri);
    console.log("✅ MongoDB connected to hospital database!");

    // Optional: Insert a test document into 'forces' collection
    const forceSchema = new mongoose.Schema({ visible: { type: Boolean, default: true } });
    const Force = mongoose.model("Force", forceSchema);

    const count = await Force.countDocuments();
    if (count === 0) {
      const doc = await Force.create({ visible: true });
      console.log("📝 Inserted test document:", doc);
    } else {
      console.log("📂 Force collection already has documents.");
    }

    // Start Express server
    app.listen(config.server.port, () => {
      console.log(`Server running on http://localhost:${config.server.port}`);
    });
  } catch (err) {
    console.error("❌ Server startup failed:", err);
    process.exit(1);
  }
};

startServer();