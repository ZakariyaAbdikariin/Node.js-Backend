"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/api/user.api.ts
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const router = (0, express_1.Router)();
router.get("/", user_controller_1.UserController.getAll);
router.post("/", user_controller_1.UserController.create);
exports.default = router;
