import { Router } from "express";
import UserControllers from "../controllers/users.controller";

const User = new UserControllers();
const router = Router();

router.get("/", User.getAll);
router.get("/:id", User.getById);
router.post("/", User.create);

export default router;
