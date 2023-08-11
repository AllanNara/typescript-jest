import { UpdateWriteOpResult } from "mongoose";
import { Business, Order, User } from "./entyties";

export interface IBusinessDAO {
	getBusiness(): Promise<Array<Business> | null>;
	getBusinessById(idBusiness: string): Promise<Business | null>;
	saveBusiness(business: Business): Promise<Business | null>;
	updateBusiness(
		idBusiness: string,
		business: Business
	): Promise<UpdateWriteOpResult | null>;
}

export interface IOrderDAO {
	getOrders(id: string): Promise<Array<Order> | null>;
	getOrderById(idOrder: string): Promise<Order | null>;
	saveOrder(order: Order): Promise<Order | null>;
	updateOrder(idOrder: string, order: Order): Promise<UpdateWriteOpResult | null>;
}

export interface IUserDAO {
	getUsers(): Promise<Array<User> | null>;
	getUserById(idUser: string): Promise<User | null>;
	saveUser(user: User): Promise<User | null>;
	updateUser(idUser: string, user: User): Promise<UpdateWriteOpResult | null>;
}
