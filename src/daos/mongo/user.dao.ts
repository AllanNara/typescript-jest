import { UpdateWriteOpResult } from "mongoose";
import { User, UserModel } from "../../interfaces/entyties";
import CustomError from "../../utils/customError";
import IDAO from "../../interfaces/daos";
import userModel from "./models/user.model";

export default class UserDAO implements IDAO<UserModel, User> {
	public async get() {
		try {
			const users: Array<UserModel> = await userModel.find();
			return users;
		} catch (error) {
			console.log(error);
			throw new CustomError();
		}
	}

	public async getById(idUser: string) {
		try {
			const user: UserModel | null = await userModel.findById(idUser);
			return user;
		} catch (error) {
			console.log(error);
			throw new CustomError();
		}
	}

	public async create(user: User) {
		try {
			const newUser: UserModel = await userModel.create(user);
			return newUser;
		} catch (error) {
			console.log(error);
			throw new CustomError();
		}
	}

	public async update(idUser: string, user: User | UserModel) {
		try {
			const result: UpdateWriteOpResult = await userModel.updateOne(
				{ _id: idUser },
				user
			);
			return result;
		} catch (error) {
			console.log(error);
			throw new CustomError();
		}
	}
}
