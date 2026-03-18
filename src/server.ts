// src/server.ts
import app from "./app";
import mongoose from "mongoose";
import { config } from "./config/config";

const startServer = async () => {
  try {
    // Connect to the MongoDB "hospital" database
    const mongoUri =
      process.env.MONGO_URI || "mongodb://localhost:27017/hospital";
    await mongoose.connect(mongoUri); // ✅ No need for useNewUrlParser or useUnifiedTopology
    console.log("✅ MongoDB connected to hospital database!");

    // Define the Force schema & model
    const forceSchema = new mongoose.Schema({
      visible: { type: Boolean, default: true },
    });

    // Model name "Force" -> collection "forces"
    const Force = mongoose.model("Force", forceSchema);

    // Insert a test document if none exist
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
