import { Schema, model, Model } from "mongoose";
import { BusinessModel } from "../../../interfaces/entyties";

const collection = "business";

export const businessSchema = new Schema<BusinessModel>({
	name: { type: String, required: true },
	products: [],
});

const businessModel = model<BusinessModel>(collection, businessSchema);

export default businessModel;
