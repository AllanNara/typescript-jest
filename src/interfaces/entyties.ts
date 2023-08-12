import { Document } from "mongoose";

export interface Product {
	product: string;
	price: number;
}

export interface ProductModel extends Product, Document {}

export interface Business {
	name: string;
	products: Array<ProductModel>;
}

export interface BusinessModel extends Business, Document {}

export interface Order {
	number: number;
	business: Business | string;
	user: User | string;
	products: Array<ProductModel>;
	totalPrice: number;
	resolved?: boolean;
}

export interface OrderModel extends Order, Document {}

export interface User {
	username: string;
	email: string;
	role: string;
	orders: Array<OrderModel>;
}

export interface UserModel extends User, Document {}
