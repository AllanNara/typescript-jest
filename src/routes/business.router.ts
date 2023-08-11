import { Router } from "express";
import BusinessControllers from "../controllers/business.controller";

const Controllers = new BusinessControllers();
const router = Router();

router.get("/", Controllers.getBusiness);
router.get("/:id", Controllers.getBusinessById);
router.post("/", Controllers.createBusiness);
router.post("/:id/products", Controllers.addProduct);

export default router;
