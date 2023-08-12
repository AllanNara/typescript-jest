import { Order, OrderModel } from "../../interfaces/entyties";
import { UpdateWriteOpResult } from "mongoose";
import CustomError from "../../utils/customError";
import IDAO from "../../interfaces/daos";
import orderModel from "./models/order.model";

export default class OrderDAO implements IDAO<OrderModel, Order> {
	public async get() {
		try {
			const orders: Array<OrderModel> = await orderModel.find();
			return orders;
		} catch (error) {
			console.log(error);
			throw new CustomError();
		}
	}

	public async getById(idOrder: string) {
		try {
			const order: OrderModel | null = await orderModel.findById(idOrder);
			return order;
		} catch (error) {
			console.log(error);
			throw new CustomError();
		}
	}

	public async create(order: Order) {
		try {
			order.resolved = false;
			const newOrder: OrderModel = await orderModel.create(order);
			return newOrder;
		} catch (error) {
			console.log(error);
			throw new CustomError();
		}
	}

	public async update(idOrder: string, order: { resolved: boolean }) {
		try {
			const result: UpdateWriteOpResult = await orderModel.updateOne(
				{ _id: idOrder },
				order
			);
			return result;
		} catch (error) {
			console.log(error);
			throw new CustomError();
		}
	}
}
