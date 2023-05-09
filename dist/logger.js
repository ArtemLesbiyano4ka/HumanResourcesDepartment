"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
var winston_1 = require("winston");
var logger = (0, winston_1.createLogger)({
    level: "debug",
    transports: [
        new winston_1.transports.Console(),
        new winston_1.transports.File({ filename: "app.log" }),
    ],
});
exports.default = logger;
