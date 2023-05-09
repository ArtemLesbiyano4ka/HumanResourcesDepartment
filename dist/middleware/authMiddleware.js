"use strict";
/** @format */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var auth = function (req, res, next) {
    try {
        var token = req.headers.authorization.split(" ")[1];
        if (!token) {
            return res.status(401).json({ message: "не авторизован" });
        }
        var decoded = jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY);
        next();
    }
    catch (e) {
        res.status(401).json({ message: "не авторизован" });
    }
};
exports.default = auth;
