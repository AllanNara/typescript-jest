import { Router } from "express";
import BusinessControllers from "../controllers/business.controller";
import { checkBusinessFields } from "../middleware/checkBody";

const Business = new BusinessControllers();
const router = Router();

router.get("/", Business.getAll);
router.get("/:bid", Business.getById);
router.post("/", checkBusinessFields, Business.create);
router.post("/:bid/products", Business.addProduct);

export default router;
