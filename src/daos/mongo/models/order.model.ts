import { Schema, model } from "mongoose";
import { Order } from "../../../interfaces/models";

const collection = "orders";

const orderSchema = new Schema<Order>({
	number: { type: Number, required: true },
	business: {
		type: Schema.Types.ObjectId,
		ref: "business",
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: "users",
	},
	products: [],
	totalProducts: { type: Number, required: true },
});

const orderModel = model(collection, orderSchema);

export default orderModel;
