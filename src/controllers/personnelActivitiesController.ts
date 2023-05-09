/** @format */

import { Request, Response } from "express";
import { PersonnelActivities } from "../models/models";

class PersonnelActivitiesCreate {
  async create(req: Request, res: Response) {
    try {
      const { name, description, data } = req.body;
      const messege = await PersonnelActivities.create({
        name,
        description,
        data,
      });
      res.status(200).json(messege);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const personnelactivities = await PersonnelActivities.findAll();
      res.status(200).json(personnelactivities);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const id = req.query;
      const personnelactivities = await PersonnelActivities.findOne({
        where: { id: id.id },
      });
      res.status(200).json(personnelactivities);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id, name, description, data } = req.body;
      await PersonnelActivities.update(
        { name: name, description: description, data: data },
        { where: { id: id } }
      );
      res
        .status(200)
        .json(await PersonnelActivities.findOne({ where: { id: id } }));
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.query;
      await PersonnelActivities.destroy({ where: { id: id.id } });
      res.status(200).json({ messege: "Объект удалён" });
    } catch (e) {
      res.status(400).json(e);
    }
  }
}

export default new PersonnelActivitiesCreate();
