"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var authController_1 = require("../controllers/authController");
var authMiddleware_1 = require("../middlewares/authMiddleware");
var authRouter = (0, express_1.Router)();
authRouter.post('/register', authController_1.register);
authRouter.post('/login', authController_1.login);
authRouter.get('/getUsers', authMiddleware_1.checkAdmin, authController_1.getAllUsers);
exports.default = authRouter;
