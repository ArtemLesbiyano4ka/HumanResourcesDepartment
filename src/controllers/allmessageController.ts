/** @format */

import { Request, Response } from "express";
import { Allmessage } from "../models/models";

class AllmessageCreate {
  async create(req: Request, res: Response) {
    try {
      const { name } = req.body;
      const messege = await Allmessage.create({ name });
      res.status(200).json(messege);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const allMessege = await Allmessage.findAll();
      res.status(200).json(allMessege);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.query;
      await Allmessage.destroy({ where: { id: id.id } });
      res.status(200).json({ messege: "Сообщение удалено" });
    } catch (e) {
      res.status(400).json(e);
    }
  }
}

export default new AllmessageCreate();
