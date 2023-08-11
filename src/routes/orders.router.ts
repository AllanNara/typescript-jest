import { Router } from "express";
import OrderController from "../controllers/orders.controller";

const Controllers = new OrderController();
const router = Router();

router.get("/", Controllers.getOrders);
router.get("/:id", Controllers.getOrderById);
router.post("/", Controllers.createOrder);
router.post("/:id/resolve", Controllers.resolveOrder);

export default router;
