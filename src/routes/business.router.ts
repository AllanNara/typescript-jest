import { Router } from "express";
import BusinessControllers from "../controllers/business.controller";

const Business = new BusinessControllers();
const router = Router();

router.get("/", Business.getAll);
router.get("/:id", Business.getById);
router.post("/", Business.create);
router.post("/:id/products", Business.addProduct);

export default router;
