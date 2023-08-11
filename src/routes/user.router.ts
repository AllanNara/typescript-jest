import { Router } from "express";
import UserControllers from "../controllers/users.controller";

const Controller = new UserControllers();
const router = Router();

router.get("/", Controller.getUsers);
router.get("/:id", Controller.getUserById);
router.post("/", Controller.saveUser);

export default router;
