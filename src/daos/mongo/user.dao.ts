import { UpdateWriteOpResult } from "mongoose";

import userModel from "./models/user.model";
import { User } from "../../interfaces/entyties";
import { IUserDAO } from "../../interfaces/daos";

export default class UserDAO implements IUserDAO {
	getUsers = async () => {
		try {
			const users: Array<User> = await userModel.find();
			return users;
		} catch (error) {
			console.log(error);
			return null;
		}
	};

	getUserById = async (idUser: string) => {
		try {
			const user: User | null = await userModel.findById(idUser);
			return user;
		} catch (error) {
			console.log(error);
			return null;
		}
	};

	saveUser = async (user: User) => {
		try {
			const newUser: User = await userModel.create(user);
			return newUser;
		} catch (error) {
			console.log(error);
			return null;
		}
	};

	updateUser = async (idUser: string, user: User) => {
		try {
			const result: UpdateWriteOpResult = await userModel.updateOne(
				{ _id: idUser },
				user
			);
			return result;
		} catch (error) {
			console.log(error);
			return null;
		}
	};
}
