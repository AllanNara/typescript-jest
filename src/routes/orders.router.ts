import { Router } from "express";
import OrderController from "../controllers/orders.controller";
import { checkOrderFields } from "../middleware/checkBody";

const Order = new OrderController();
const router = Router();

router.get("/", Order.getAll);
router.get("/:oid", Order.getById);
router.post("/", checkOrderFields, Order.create);
router.post("/:oid/resolve", Order.resolve);

export default router;
