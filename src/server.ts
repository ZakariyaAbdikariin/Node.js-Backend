// src/server.ts
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { sequelize } from "./config/database";
import userRoutes from "./api/user.api";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());

app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Hospital Users API!");
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully.");
    await sequelize.sync({ alter: true });
    console.log("Models synchronized with database.");
  } catch (err) {
    console.error("Unable to connect to the database:", err);
  }
})();

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
