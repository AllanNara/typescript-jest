import { Product, ProductModel } from "../../interfaces/entyties";
import { UpdateWriteOpResult } from "mongoose";
import productModel from "./models/product.model";
import CustomError from "../../utils/customError";
import IDAO from "../../interfaces/daos";

export default class ProductDAO implements IDAO<ProductModel, Product> {
	public async get() {
		try {
			const products: Array<ProductModel> = await productModel.find();
			return products;
		} catch (error) {
			console.log(error);
			throw new CustomError();
		}
	}

	public async getById(idProduct: string) {
		try {
			const product: ProductModel | null = await productModel.findById(idProduct);
			return product;
		} catch (error) {
			console.log(error);
			throw new CustomError();
		}
	}

	public async create(product: Product) {
		try {
			const newProduct: ProductModel = await productModel.create(product);
			return newProduct;
		} catch (error) {
			console.log(error);
			throw new CustomError();
		}
	}

	public async update(idProduct: string, product: Product) {
		try {
			const result: UpdateWriteOpResult = await productModel.updateOne(
				{ _id: idProduct },
				product
			);
			return result;
		} catch (error) {
			console.log(error);
			throw new CustomError();
		}
	}
}
