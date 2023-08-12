import { Router } from "express";
import UserControllers from "../controllers/users.controller";
import { checkUserFields } from "../middleware/checkBody";

const User = new UserControllers();
const router = Router();

router.get("/", User.getAll);
router.get("/:uid", User.getById);
router.post("/", checkUserFields, User.create);

export default router;
