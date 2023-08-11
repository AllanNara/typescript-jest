import { Document } from "mongoose";

export interface Business {
	name: string;
	products: Array<string>;
}

export interface BusinessModel extends Business, Document {}

export interface Order {
	number: number;
	business: Business;
	user: User;
	products: Array<string>;
	totalProducts: number;
	resolved?: boolean;
}

export interface OrderModel extends Order, Document {}

export interface User {
	name: string;
	email: string;
	role: string;
	orders: Order;
}

export interface UserModel extends User, Document {}
