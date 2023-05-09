/** @format */

import { Request, Response } from "express";
import { OneTimeCode } from "../models/models";

class GenerateCode {
  async generation(req: Request, res: Response) {
    try {
      const code = Math.floor(Math.random() * 10000);
      const codecreate = await OneTimeCode.create({ code });
      res.status(200).json(codecreate);
    } catch (e) {
      res.status(400).json(e);
    }
  }
}

export default new GenerateCode();
