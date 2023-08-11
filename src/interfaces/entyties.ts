import { Document } from "mongoose";

export interface Business {
	name: string;
	products: Array<any>;
}

export interface BusinessModel extends Business, Document {}

export interface Order {
	number: number;
	business: Business;
	user: User;
	products: Array<any>;
	totalProducts: number;
}

export interface OrderModel extends Order, Document {}

export interface User {
	name: string;
	email: string;
	role: string;
	orders: Order;
}

export interface UserModel extends User, Document {}
