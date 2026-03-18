// src/app.ts
import express from "express";
import userRoutes from "./api/user.api"; // ✅ default import

const app = express();

app.use(express.json());
app.use("/api/users", userRoutes);

export default app;
