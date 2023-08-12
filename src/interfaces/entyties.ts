import { Document } from "mongoose";

export interface Business {
	name: string;
	products: Array<Product>;
}

export interface BusinessModel extends Business, Document {}

export interface Order {
	number: number;
	business: Business | string;
	user: User | string;
	products: Array<string>;
	totalPrice: number;
	resolved?: boolean;
}

export interface OrderModel extends Order, Document {}

export interface User {
	name: string;
	email: string;
	role: string;
	orders: Array<OrderModel>;
}

export interface UserModel extends User, Document {}

export interface Product {
	id: string;
	product: string;
	price: number;
}
