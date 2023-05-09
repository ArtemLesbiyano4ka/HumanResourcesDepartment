/** @format */

import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

function role(req: Request, res: Response, next: NextFunction) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "не авторизован" });
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if (decoded["role"] !== "ADMIN") {
      return res.status(403).json({ message: "Нет доступа" });
    }
    next();
  } catch (e) {
    res.status(401).json({ message: "не авторизован" });
  }
}

export default role;
