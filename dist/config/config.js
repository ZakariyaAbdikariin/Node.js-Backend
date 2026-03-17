"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = exports.config = void 0;
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.config = {
    db: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: Number(process.env.DB_PORT),
    },
    server: {
        port: Number(process.env.PORT) || 8080,
    },
};
exports.sequelize = new sequelize_1.Sequelize(exports.config.db.database, exports.config.db.user, exports.config.db.password, {
    host: exports.config.db.host,
    port: exports.config.db.port,
    dialect: "mysql",
    logging: false,
});
