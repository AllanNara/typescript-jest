import { Request, Response } from "express";
import UserDAO from "../daos/mongo/user.dao";
import { User } from "../interfaces/entyties";

const userDao = new UserDAO();

export default class UserControllers {
	async getUsers(_: Request, res: Response): Promise<Response> {
		const result = await userDao.getUsers();
		if (result === null)
			return res.status(500).send({ status: "error", error: "Something went wrong" });
		return res.send({ status: "success", result });
	}

	async getUserById(req: Request, res: Response): Promise<Response> {
		const idUser: string = req.params.id;
		const result = await userDao.getUserById(idUser);
		if (result === null)
			return res.status(404).send({ status: "error", error: "User not found" });
		return res.send({ status: "success", result });
	}

	async saveUser(req: Request, res: Response): Promise<Response> {
		const newUser: User = req.body;
		const result = await userDao.saveUser(newUser);
		if (result === null)
			return res.status(500).send({ status: "error", error: "Something went wrong" });
		return res.send({ status: "success", result });
	}
}
