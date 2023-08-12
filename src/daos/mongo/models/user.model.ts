import { Schema, model } from "mongoose";
import { UserModel } from "../../../interfaces/entyties";
import uniqueValidator from "mongoose-unique-validator";

const collection = "users";

const userSchema = new Schema<UserModel>({
	username: { type: String, required: true, unique: true },
	email: { type: String, required: true, unique: true },
	role: { type: String, enum: ["user", "business", "admin"], default: "user" },
	orders: [
		{
			type: Schema.Types.ObjectId,
			ref: "orders",
		},
	],
});

userSchema.plugin(uniqueValidator);

const userModel = model<UserModel>(collection, userSchema);

export default userModel;
