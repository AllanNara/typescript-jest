import { Schema, model } from "mongoose";
import { User } from "../../../interfaces/models";

const collection = "users";

const userSchema = new Schema<User>({
	name: { type: String, required: true },
	email: { type: String, required: true },
	role: { type: String },
	orders: [
		{
			type: Schema.Types.ObjectId,
			ref: "orders",
		},
	],
});

const userModel = model(collection, userSchema);

export default userModel;
