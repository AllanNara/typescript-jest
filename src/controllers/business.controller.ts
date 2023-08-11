import { Request, Response } from "express";
import BusinessDAO from "../daos/mongo/business.dao";
import { Business } from "../interfaces/entyties";

const businessDao = new BusinessDAO();

export default class BusinessControllers {
	async getBusiness(_: Request, res: Response): Promise<Response> {
		const result = await businessDao.getBusiness();
		if (result === null)
			return res.status(500).send({ status: "error", error: "Something went wrong" });
		return res.send({ status: "success", result });
	}

	async getBusinessById(req: Request, res: Response): Promise<Response> {
		const idBusiness: string = req.params.id;
		const result = await businessDao.getBusinessById(idBusiness);
		if (result === null)
			return res.status(404).send({ status: "error", error: "Business not found" });
		return res.send({ status: "success", result });
	}

	async createBusiness(req: Request, res: Response): Promise<Response> {
		const business: Business = req.body;
		const result = await businessDao.saveBusiness(business);
		if (result === null)
			return res.status(500).send({ status: "error", error: "Something went wrong" });
		return res.send({ status: "success", result });
	}

	async addProduct(req: Request, res: Response): Promise<Response> {
		const idBusiness: string = req.params.id;
		const producto: any = req.body;
		const newBusiness = await businessDao.getBusinessById(idBusiness);
		if (newBusiness === null)
			return res.status(404).send({ status: "error", error: "Business not found" });
		newBusiness.products.push(producto);
		const result = await businessDao.updateBusiness(req.params.id, newBusiness);
		if (result === null)
			return res.status(500).send({ status: "error", error: "Something went wrong" });
		return res.send({ status: "success", result });
	}
}
