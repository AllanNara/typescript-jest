import { Router } from "express";
import OrderController from "../controllers/orders.controller";

const Order = new OrderController();
const router = Router();

router.get("/", Order.getAll);
router.get("/:id", Order.getById);
router.post("/", Order.create);
router.post("/:id/resolve", Order.resolve);

export default router;
