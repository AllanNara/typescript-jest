import { Schema, model } from "mongoose";
import { UserModel } from "../../../interfaces/entyties";

const collection = "users";

const userSchema = new Schema<UserModel>({
	username: { type: String, required: true },
	email: { type: String, required: true },
	role: { type: String, enum: ["user", "business", "admin"], default: "user" },
	orders: [
		{
			type: Schema.Types.ObjectId,
			ref: "orders",
		},
	],
});

const userModel = model<UserModel>(collection, userSchema);

export default userModel;
