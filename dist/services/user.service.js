"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
// src/services/user.service.ts
const user_repository_1 = require("../repositories/user.repository");
const userRepo = new user_repository_1.UserRepository();
class UserService {
    // ✅ Make sure `export` is in front of class
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield userRepo.getAllUsers();
        });
    }
    createUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield userRepo.createUser(data);
        });
    }
}
exports.UserService = UserService;
