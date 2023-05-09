/** @format */

import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT: number = +process.env.PORT;

const start = async () => {
  try {
    app.listen(PORT, () => console.log("Server work " + PORT));
  } catch (e) {
    console.log(e);
  }
};

start();
