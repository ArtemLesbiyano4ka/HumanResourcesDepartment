/** @format */

import { Router } from "express";
import UserController from "../controllers/userController";
import PersonnelActivitiesCreate from "../controllers/personnelActivitiesController";
import GenerateCode from "../controllers/generateCodeController";
import MessegeFromUserCreate from "../controllers/usermessegeController";
import AllmessageCreate from "../controllers/allmessageController";
import auth from "../middleware/authMiddleware";
import role from "../middleware/checkRoleMiddleware";

const router = Router();

router.post("/reguser", UserController.registration);
router.post("/login", UserController.login);
router.get("/check", auth, UserController.check);

router.post("/createmessage", MessegeFromUserCreate.create);
router.get("/getAllmessage", MessegeFromUserCreate.getAll);
router.delete("/deletemessage", MessegeFromUserCreate.delete);

router.post("/createmessageAll", AllmessageCreate.create);
router.get("/getAllmessageAll", AllmessageCreate.getAll);
router.delete("/deletemessageAll", AllmessageCreate.delete);

router.post("/create", role, PersonnelActivitiesCreate.create);
router.get("/getall", PersonnelActivitiesCreate.getAll);
router.get("/getone", PersonnelActivitiesCreate.getOne);
router.put("/update", PersonnelActivitiesCreate.update);
router.delete("/delete", PersonnelActivitiesCreate.delete);

router.get("/generation", GenerateCode.generation);

export default router;
