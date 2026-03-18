// src/app.ts
import express from "express";
import userRoutes from "./api/user.api";
import companyRoutes from "./api/company.api";

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/companies", companyRoutes);

export default app;
