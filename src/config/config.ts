import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const config = {
  db: {
    host: process.env.DB_HOST!,
    user: process.env.DB_USER!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_NAME!,
    port: Number(process.env.DB_PORT),
  },
  server: {
    port: Number(process.env.PORT) || 8080,
  },
};

export const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  {
    host: config.db.host,
    port: config.db.port,
    dialect: "mysql",
    logging: false,
  },
);
