// src/app.ts
import express from "express";
import userRoutes from "./api/user.api";

const app = express();

app.use(express.json());
app.use("/users", userRoutes);

export default app;
