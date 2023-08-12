import { Schema, model } from "mongoose";
import { OrderModel } from "../../../interfaces/entyties";

const collection = "orders";

const orderSchema = new Schema<OrderModel>({
	number: { type: Number, required: true },
	business: {
		type: Schema.Types.ObjectId,
		ref: "business",
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: "users",
	},
	products: [
		{
			product: {
				type: Schema.Types.ObjectId,
				ref: "products",
			},
			quantity: { type: Number, default: 1 },
		},
	],
	totalPrice: { type: Number, required: true },
});

const orderModel = model<OrderModel>(collection, orderSchema);

export default orderModel;
