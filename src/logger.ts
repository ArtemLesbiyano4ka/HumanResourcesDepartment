/** @format */

import { createLogger, transports } from "winston";

const logger = createLogger({
  level: "debug",
  transports: [
    new transports.Console(),
    new transports.File({ filename: "app.log" }),
  ],
});

export default logger;
