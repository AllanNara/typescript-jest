import { Schema, model, Model } from "mongoose";
import { UserModel } from "../../../interfaces/entyties";

const collection = "users";

const userSchema = new Schema<UserModel>({
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

const userModel = model<UserModel>(collection, userSchema);

export default userModel;
