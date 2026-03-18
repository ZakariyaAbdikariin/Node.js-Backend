import express from "express";
import transactionRoutes from "./api/transaction.api";

const app = express();

app.use(express.json());

app.use("/api/transaction", transactionRoutes);

export default app;
