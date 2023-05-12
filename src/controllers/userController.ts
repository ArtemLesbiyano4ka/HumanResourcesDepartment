/** @format */

import { User, OneTimeCode, Basket } from "../models/models";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const generateJwt = (id: number, email: string, role: string) => {
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};

class UserController {
  async registration(req: Request, res: Response) {
    const { email, password, role, code } = req.body;
    const findcode = await OneTimeCode.findOne({ where: { code: code } });
    if (!findcode) {
      return res.status(400).json({ message: "Такого кода не существует" });
    }
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Некорректный email или password" });
    }
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      return res
        .status(400)
        .json({ message: "Пользователь c таким email уже существует" });
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({ email, role, password: hashPassword });
    await Basket.create({ userId: user.dataValues.id });
    const token = generateJwt(user.dataValues.id, email, role);
    await OneTimeCode.destroy({ where: { code: code } });
    return res.status(200).json({ token });
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      res.status(403).json({ message: "Пользователь не найден" });
    }
    let comparePassword = bcrypt.compareSync(
      password,
      user.dataValues.password
    );
    if (!comparePassword) {
      res.status(403).json({ message: "Указан неверный пароль" });
    }
    const token = generateJwt(user.dataValues.id, email, user.dataValues.role);
    return res.json({ token });
  }

  async update(req: Request, res: Response) {
    try {
      const id = req.query;
      const {
        fullname,
        employmentDate,
        workExperience,
        salaryperhour,
        workexperience,
        desiredincome,
        prospects,
      } = req.body;
      const updateUser = await User.update(
        {
          fullname: fullname,
          employmentDate: employmentDate,
          workExperience: workExperience,
          salaryperhour: salaryperhour,
          workexperience: workexperience,
          desiredincome: desiredincome,
          prospects: prospects,
        },
        { where: { id: id } }
      );
      res.status(200).json(updateUser);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async check(req: Request, res: Response) {
    res.json({ message: "WORKING!!!" });
  }
}

export default new UserController();
