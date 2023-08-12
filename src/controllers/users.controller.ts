import { Request, Response, NextFunction } from "express";
import { User } from "../interfaces/entyties";
import UserServices from "../services/user.services";

export default class UserControllers extends UserServices {
	async getAll(_: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const result = await super.getUsers();
			res.send({ status: "success", result });
		} catch (error) {
			next(error);
		}
	}

	async getById(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const idUser: string = req.params.id;
			const result = await super.getUserById(idUser);
			res.send({ status: "success", result });
		} catch (error) {
			next(error);
		}
	}

	async create(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const newUser: User = req.body;
			const result = await super.createUser(newUser);
			res.send({ status: "success", result });
		} catch (error) {
			next(error);
		}
	}
}
