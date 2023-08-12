import { Business, Product } from "../interfaces/entyties";
import BusinessDAO from "../daos/mongo/business.dao";
import CustomError from "../utils/customError";
import ProductDAO from "../daos/mongo/product.dao";

const productDAO = new ProductDAO();

export default class BusinessServices {
	private businessDAO: BusinessDAO = new BusinessDAO();

	protected async getBusinesses() {
		try {
			const businesess = await this.businessDAO.get();
			return businesess;
		} catch (error) {
			throw new CustomError();
		}
	}

	protected async getBusinessById(idBusiness: string) {
		try {
			const business = await this.businessDAO.getById(idBusiness);
			if (business === null) throw new CustomError("Business not found", 404);
			return business;
		} catch (error) {
			throw new CustomError();
		}
	}

	protected async createBusiness(business: Business) {
		try {
			const newBusiness = await this.businessDAO.create(business);
			return newBusiness;
		} catch (error) {
			throw new CustomError();
		}
	}

	protected async addProductToBusiness(idBusiness: string, product: Product) {
		try {
			const foundBusiness = await this.getBusinessById(idBusiness);
			const newProduct = await productDAO.create(product);
			foundBusiness.products.push(newProduct._id);
			const result = await this.businessDAO.update(idBusiness, foundBusiness);
			return result;
		} catch (error) {
			throw new CustomError();
		}
	}
}
