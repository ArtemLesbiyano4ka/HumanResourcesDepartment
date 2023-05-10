/** @format */

import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

const auth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "не авторизован" });
    }
    jwt.verify(token, process.env.SECRET_KEY);
    next();
  } catch (e) {
    res.status(401).json({ message: "не авторизован" });
  }
};

export default auth;
