import { Request, Response, NextFunction } from "express";
import OrdersServices from "../services/orders.services";

export default class OrderControllers extends OrdersServices {
	async getAll(_: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const result = await super.getOrders();
			res.send({ status: "success", result });
		} catch (error) {
			next(error);
		}
	}

	async getById(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const idOrder: string = req.params.oid;
			const result = await super.getOrderById(idOrder);
			res.send({ status: "success", result });
		} catch (error) {
			next(error);
		}
	}

	async create(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const { user, business, products } = req.body;
			const result = await super.createOrder(user, business, products);
			res.send({ status: "success", result });
		} catch (error) {
			next(error);
		}
	}

	async resolve(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const idOrder: string = req.params.oid;
			const result = await super.resolveOrder(idOrder);
			res.send({ status: "success", result });
		} catch (error) {
			next(error);
		}
	}
}
