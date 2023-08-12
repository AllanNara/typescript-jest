import { Schema, model } from "mongoose";
import { BusinessModel } from "../../../interfaces/entyties";
import uniqueValidator from "mongoose-unique-validator";

const collection = "business";

export const businessSchema = new Schema<BusinessModel>({
	name: { type: String, required: true, unique: true },
	products: [
		{
			type: Schema.Types.ObjectId,
			ref: "products",
		},
	],
});

businessSchema.plugin(uniqueValidator);

businessSchema.pre("findOne", function (next) {
	this.populate("products");
	next();
});

const businessModel = model<BusinessModel>(collection, businessSchema);

export default businessModel;
