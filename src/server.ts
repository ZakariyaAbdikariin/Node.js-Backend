import app from "./app";
import { sequelize } from "./config/database";

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connected!");

    await sequelize.sync();

    app.listen(8080, () => {
      console.log("Server running on http://localhost:8080");
    });
  } catch (error) {
    console.error("❌ Database connection failed:", error);
  }
};

startServer();
