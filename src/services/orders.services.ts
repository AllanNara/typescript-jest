import { Order, Product } from "../interfaces/entyties";
import BusinessDAO from "../daos/mongo/business.dao";
import CustomError from "../utils/customError";
import OrderDAO from "../daos/mongo/order.dao";
import UserDAO from "../daos/mongo/user.dao";

const userDao = new UserDAO();
const businessDao = new BusinessDAO();

export default class OrdersServices {
	private orderDAO: OrderDAO = new OrderDAO();

	protected async getOrders() {
		try {
			const orders = await this.orderDAO.get();
			return orders;
		} catch (error) {
			throw new CustomError();
		}
	}

	protected async getOrderById(idOrder: string) {
		try {
			const order = await this.orderDAO.getById(idOrder);
			if (order === null) throw new CustomError("Order not found", 404);
			return order;
		} catch (error) {
			throw new CustomError();
		}
	}

	protected async createOrder(
		userId: string,
		businessId: string,
		products: Array<string>
	) {
		try {
			const resultUser = await userDao.getById(userId);
			const resultBusiness = await businessDao.getById(businessId);
			if (!resultUser) throw new CustomError("User not found", 400);
			if (!resultBusiness) throw new CustomError("Business not found", 400);

			let actualOrders: Array<Product> = [];
			let totalPrice: number = 0;
			let orderNumber: number = Date.now() + Math.floor(Math.random() * 10000 + 1);

			actualOrders = resultBusiness.products.filter((product) =>
				products.includes(product.id)
			);
			totalPrice = actualOrders.reduce((acc, prev) => {
				acc += prev.price;
				return acc;
			}, 0);

			const order: Order = {
				number: orderNumber,
				business: businessId,
				user: userId,
				resolved: false,
				products: actualOrders.map((product) => product.id),
				totalPrice,
			};

			const orderResult = await this.orderDAO.create(order);
			resultUser.orders.push(orderResult);
			await userDao.update(userId, resultUser);
			return orderResult;
		} catch (error) {
			throw new CustomError();
		}
	}

	protected async resolveOrder(idOrder: string) {
		try {
			const result = await this.orderDAO.update(idOrder, {
				resolved: true,
			});
			return result;
		} catch (error) {
			throw new CustomError();
		}
	}
}
