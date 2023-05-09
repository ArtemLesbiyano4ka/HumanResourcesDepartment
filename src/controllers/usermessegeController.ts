/** @format */

import { Request, Response } from "express";
import { MessegeFromUser } from "../models/models";

class MessegeFromUserCreate {
  async create(req: Request, res: Response) {
    try {
      const { name, userId } = req.body;
      const messege = await MessegeFromUser.create({ name, userId });
      res.status(200).json(messege);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const allMessege = await MessegeFromUser.findAll();
      res.status(200).json(allMessege);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.query;
      await MessegeFromUser.destroy({ where: { id: id.id } });
      res.status(200).json({ messege: "Сообщение удалено" });
    } catch (e) {
      res.status(400).json(e);
    }
  }
}

export default new MessegeFromUserCreate();
