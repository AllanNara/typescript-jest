import { Request, Response } from "express";
import OrderDAO from "../daos/mongo/order.dao";
import { Order } from "../interfaces/entyties";

const orderDao = new OrderDAO();

export default class OrderControllers {
	async getOrders(_: Request, res: Response): Promise<Response> {
		const result = await orderDao.getOrders();
		if (result === null)
			return res.status(500).send({ status: "error", error: "Something went wrong" });
		return res.send({ status: "success", result });
	}

	async getOrderById(req: Request, res: Response): Promise<Response> {
		const idOrder: string = req.params.id;
		const result = await orderDao.getOrderById(idOrder);
		if (result === null)
			return res.status(404).send({ status: "error", error: "Order not found" });
		return res.send({ status: "success", result });
	}

	async createOrder(req: Request, res: Response): Promise<Response> {
		const order: Order = req.body;
		const result = await orderDao.saveOrder(order);
		if (result === null)
			return res.status(500).send({ status: "error", error: "Something went wrong" });
		return res.send({ status: "success", result });
	}

	async resolveOrder(req: Request, res: Response): Promise<Response> {
		const idOrder: string = req.params.id;
		const result = await orderDao.updateOrder(idOrder, {
			resolved: true,
		});
		if (result === null)
			return res.status(500).send({ status: "error", error: "Something went wrong" });
		return res.send({ status: "success", result });
	}
}
