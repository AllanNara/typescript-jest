import { UpdateWriteOpResult } from "mongoose";

import { Order } from "../../interfaces/entyties";
import { IOrderDAO } from "../../interfaces/daos";
import orderModel from "./models/order.model";

export default class OrderDAO implements IOrderDAO {
	getOrders = async () => {
		try {
			const orders: Array<Order> = await orderModel.find();
			return orders;
		} catch (error) {
			console.log(error);
			return null;
		}
	};

	getOrderById = async (idOrder: string) => {
		try {
			const order: Order | null = await orderModel.findById(idOrder);
			return order;
		} catch (error) {
			console.log(error);
			return null;
		}
	};

	saveOrder = async (order: Order) => {
		try {
			order.resolved = false;
			const newOrder: Order = await orderModel.create(order);
			return newOrder;
		} catch (error) {
			console.log(error);
			return null;
		}
	};

	updateOrder = async (idOrder: string, order: { resolved: boolean }) => {
		try {
			const result: UpdateWriteOpResult = await orderModel.updateOne(
				{ _id: idOrder },
				order
			);
			return result;
		} catch (error) {
			console.log(error);
			return null;
		}
	};
}
