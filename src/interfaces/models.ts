import { Document } from "mongoose";

export interface Business extends Document {
	name: string;
	products: Array<any>;
}

export interface Order extends Document {
	number: number;
	business: Business;
	user: User;
	products: Array<any>;
	totalProducts: number;
}

export interface User extends Document {
	name: string;
	email: string;
	role: string;
	orders: Order;
}
