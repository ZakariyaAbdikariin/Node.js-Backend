import express from "express";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger";

import userApi from "./api/user.api";
import companyApi from "./api/company.api";
import transactionApi from "./api/transaction.api";

const app = express();

app.use(express.json());

// Routes
app.use("/users", userApi);
app.use("/companies", companyApi);
app.use("/transaction", transactionApi);

// Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;
